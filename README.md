ITPM Assessment 01 – Automated UI Testing

Student ID: IT23312876
Module: ITPM
Assessment: 01

Project Overview

This project is part of ITPM Assessment 01, focusing on automated UI testing using Playwright.
The objective is to validate functional and robustness aspects of a web-based translation application through well-structured positive and negative test cases.

The project includes:
Automated test scripts written in JavaScript using Playwright
A comprehensive Excel sheet containing test cases

Test execution reports

🔗 GitHub Repository

Repository link is provided in the text file included with the submission: Git Repo_ITPM_IT23312876.txt

(Contains the GitHub URL for this project)

Testing Scope
Positive Functional Test Cases

Simple sentences
Compound and complex sentences
Punctuation handling
Mixed language inputs
Length-based validation (S / M / L)

Negative / Robustness Test Cases

Empty input
Invalid characters
Very long text inputs
Line breaks and formatting stress tests
Unexpected user behavior

Technologies Used

Playwright – UI automation framework
JavaScript (Node.js) – Test scripting
Excel – Test case documentation
Git & GitHub – Version control

Project Structure
IT23312876/
│
├── tests/                     # Playwright test scripts
├── playwright.config.js       # Playwright configuration
├── package.json               # Project dependencies
├── ITPM_Assessment_01_IT23312876.xlsx   # Test cases (Excel)
├── Git Repo_ITPM_IT23312876.txt          # GitHub link
└── README.md                  # Project documentation

How to Run the Tests
1. Install dependencies
npm install

2️. Run all tests
npx playwright test

3. View HTML report
npx playwright show-report

Test Case Documentation

All test cases (Positive & Negative) are documented in:

ITPM_Assessment_01_IT23312876.xlsx


Each test case includes:

Test Case ID
Test Case Name
Input
Expected Output
Actual Output
Status
Coverage / Justification

Conclusion

This project demonstrates:
Proper application of automated UI testing concepts
Well-structured test case design
Effective use of Playwright for real-world testing scenarios
Alignment with ITPM Assessment 01 requirements
