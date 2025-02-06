// Wait for the document to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Function to show modal
    function showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            $(modal).modal('show');
        }
    }

    // Function to hide modal
    function hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            $(modal).modal('hide');
        }
    }

    // Add event listeners to all buttons with the class 'dropdown-arrow'
    const dropdownButtons = document.querySelectorAll('.dropdown-arrow');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetModal = button.getAttribute('data-target');
            showModal(targetModal.substring(1));
        });
    });

    // Add event listeners to all elements with the class 'close'
    const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function () {
            const modal = button.closest('.modal');
            if (modal) {
                hideModal(modal.id);
            }
        });
    });
});