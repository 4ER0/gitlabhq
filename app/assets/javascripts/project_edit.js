export default function setupProjectEdit() {
  const $transferForm = $('.js-project-transfer-form');
  const $selectNamespace = $transferForm.find('.select2');

  $selectNamespace.on('change', () => {
    $transferForm.find(':submit').prop('disabled', !$selectNamespace.val());
  });
  $selectNamespace.trigger('change');
}
