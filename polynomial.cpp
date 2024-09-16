#include <iostream>
#include <map>
#include <cmath>
#include <nlohmann/json.hpp>
#include <string>

using json = nlohmann::json;
using namespace std;

// Function to decode y-values based on their base
long long decodeValue(string value, int base) {
    return stoll(value, 0, base);  // Convert string to long long based on base
}

// Function to calculate the constant term (c) using Lagrange Interpolation
double lagrangeInterpolation(map<int, long long>& points, int k) {
    double constantTerm = 0.0;
    
    for (auto i = points.begin(); i != points.end(); i++) {
        int xi = i->first;
        double yi = i->second;
        
        double term = yi;
        for (auto j = points.begin(); j != points.end(); j++) {
            if (i != j) {
                int xj = j->first;
                term *= (0 - xj) / (double)(xi - xj);
            }
        }
        
        constantTerm += term;
    }
    
    return constantTerm;
}

void processTestCase(const string& input_json, const string& test_case_name) {
    json input_data = json::parse(input_json);
    int n = input_data["keys"]["n"];
    int k = input_data["keys"]["k"];

    map<int, long long> points;
    for (auto& [key, value] : input_data.items()) {
        if (key == "keys") continue;
        int x = stoi(key);  // The key is the x value
        int base = stoi(value["base"].get<string>());
        string encoded_value = value["value"];
        long long y = decodeValue(encoded_value, base);
        points[x] = y;
    }

    double constantTerm = lagrangeInterpolation(points, k);
    cout << "Test Case: " << test_case_name << endl;
    cout << "The constant term (c) of the polynomial is: " << constantTerm << endl << endl;
}

int main() {
    // First test case (original)
    string input_json_1 = R"({
        "keys": {
            "n": 4,
            "k": 3
        },
        "1": {
            "base": "10",
            "value": "4"
        },
        "2": {
            "base": "2",
            "value": "111"
        },
        "3": {
            "base": "10",
            "value": "12"
        },
        "6": {
            "base": "4",
            "value": "213"
        }
    })";
    
    // Second test case (new)
    string input_json_2 = R"({
        "keys": {
            "n": 9,
            "k": 6
        },
        "1": {
            "base": "10",
            "value": "28735619723837"
        },
        "2": {
            "base": "16",
            "value": "1A228867F0CA"
        },
        "3": {
            "base": "12",
            "value": "32811A4AA0B7B"
        },
        "4": {
            "base": "11",
            "value": "917978721331A"
        },
        "5": {
            "base": "16",
            "value": "1A22886782E1"
        },
        "6": {
            "base": "10",
            "value": "28735619654702"
        },
        "7": {
            "base": "14",
            "value": "71AB5070CC4B"
        },
        "8": {
            "base": "9",
            "value": "122662581541670"
        },
        "9": {
            "base": "8",
            "value": "642121030037605"
        }
    })";

    // Process and print results for both test cases
    processTestCase(input_json_1, "First Test Case");
    processTestCase(input_json_2, "Second Test Case");

    return 0;
}

