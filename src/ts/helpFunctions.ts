const getRandomIndexArray = function(inputArray: any[]): number {
    return getRandomNumberOfRande(0, inputArray.length);
};

const getRandomNumberOfRande = function(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
};

const makeRequestAndGetResult = function(URL: string, callback: (data: any) => any): void  {
    const f = callback || function(data) {}; 

    const request = new XMLHttpRequest();
    const checkRequest = function () {
        if (isRequestWithoutErrors(this)) {
            f(this.response);
        }
    }

    request.onreadystatechange = checkRequest;
    request.open('GET', URL, false);
    request.send();
};

const isRequestWithoutErrors = function(request: XMLHttpRequest) {
    return request.readyState === 4 && request.status === 200;
};

const hideElement = function() {
    this.classList.add('hide');
    this.removeEventListener('transitionend', hideElement);
};

const showElement = function(el: HTMLElement) {
    el.classList.remove('hide');
};
export { getRandomIndexArray, getRandomNumberOfRande, makeRequestAndGetResult };