console.log('hai');

if (document.querySelector('[data-msg-container]')) {
    setTimeout(_ => {
        document.querySelector('[data-msg-container]').remove();
    }, 5000);
}
 