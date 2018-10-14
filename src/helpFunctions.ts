const getRandomIndexArray = function(arr: any[]): number {
    return getRandomNumberOfRande(0, arr.length);
};
const getRandomNumberOfRande = function(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min) + min);
};

const getResultOfRequest = function(URL: string, callback: (data: any) => any): void  {
    const f = callback || function(data) {}; 

    const request = new XMLHttpRequest();
    const checkRequest = function () {
        if (isRequestPostedWithoutErrors(this)) {
            f(this.response);
        }
    }

    request.onreadystatechange = checkRequest;
    request.open('GET', URL, false);
    request.send();
};
const isRequestPostedWithoutErrors = function(request: XMLHttpRequest) {
    return request.readyState === 4 && request.status === 200;
};

const hideElement = function() {
    this.classList.add('hide');
    this.removeEventListener('transitionend', hideElement);
};
const showElement = function(el: HTMLElement) {
    el.classList.remove('hide');
};