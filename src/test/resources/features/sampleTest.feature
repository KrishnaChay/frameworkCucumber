
Feature: Sample framework

  @test1
  Scenario Outline: sample test1
    Given open website
    When user login with '<userName>' and '<password>'

    Examples:
      | userName | password |
      | test     | test     |

  @test1
  Scenario Outline: sample test2
    Given open website
    When user register with '<userName>' and '<password>'

    Examples:
      | userName | password |
      | test1    | test2    |
