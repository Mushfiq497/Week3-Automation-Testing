*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}       https://www.saucedemo.com/
${BROWSER}   chrome
${USERNAME}  standard_user
${PASSWORD}  secret_sauce

*** Test Cases ***
Valid Login Test

    Open Browser    ${URL}    ${BROWSER}
    Maximize Browser Window
    Sleep    2s

    Input Text    id:user-name    ${USERNAME}
    Sleep    1s

    Input Text    id:password    ${PASSWORD}
    Sleep    1s

    Click Button    id:login-button
    Sleep    3s

    Location Should Contain    inventory

    Sleep    5s

    Close Browser