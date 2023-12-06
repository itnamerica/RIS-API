; (function (window) {
    // CONSTANTS
    const URL_PROFILE = './session';
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    const redirect = () => {
        window.location.href = '/admin?message=your session has expired';
    };

    const requestOptions = {
        method: 'GET'
    };

    fetch(URL_PROFILE, requestOptions).then(response => {
        // console.log('session response', response);
        return response.text();
    }).then(result => {
        const { authenticated, timeout } = JSON.parse(result);
        if (!authenticated) {
            redirect();
        }
        setTimeout(() => {
            redirect();
        }, timeout * 1000);
        console.log('session authenticated', authenticated, timeout);
    }).catch(error => {
        console.log('error', error);
    });
})(window);