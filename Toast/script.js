const Toast = {
    init(){
        this.hideTimeout = null;
    },

    show(message){
        clearTimeout(this.hideTimeout);
        this.toast = document.createElement('div');
        this.toast.className = 'toast';
        document.body.appendChild(this.toast);
        this.toast.textContent = message;
        this.toast.className = 'toast toast--visible'
        this.hideTimeout = setTimeout(() => {
            this.toast.remove();
        }, 3000);
    }

};


document.addEventListener('DOMContentLoaded', () => Toast.init());
