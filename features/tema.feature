Feature: Trocar o tema

  Scenario: Trocar o tema com administrador
    Given que estou logado e na pagina inicial
    When clico em perfil e trocar tema
    And seleciono um tema criado e clico em salvar
    Then devo ver o novo tema