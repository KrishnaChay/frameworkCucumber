
Feature: Sample framework1

  @test1
  Scenario Outline: sample test11
    Given open website
    When user login with '<userName>' and '<password>'

    Examples:
      | userName | password |
      | test     | test     |

  @test1
  Scenario Outline: sample test21
    Given open website
    When user register with '<userName>' and '<password>'

    Examples:
      | userName | password |
      | test1    | test2    |
