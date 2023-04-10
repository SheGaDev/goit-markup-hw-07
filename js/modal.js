(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.modal.addEventListener("click", (click) => {
        if (click.target === click.currentTarget) {
            refs.modal.classList.add("is-hidden");
            document.body.classList.toggle("no-scroll", false);
        }
    });
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
        document.body.classList.toggle("no-scroll");
    }
})();