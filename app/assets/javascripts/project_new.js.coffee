class @ProjectNew
  constructor: ->
    $('.project-edit-container').on 'ajax:before', =>
      $('.project-edit-container').hide()
      $('.save-project-loader').show()

    @initEvents()


  initEvents: ->
    disableButtonIfEmptyField '#project_name', '.project-submit'
