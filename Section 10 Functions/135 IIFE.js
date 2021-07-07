'use strict'

const runOnce = function (){
    console.log('This will never run again.');
};

(function (){
    console.log('This will never run again.');
})();

(()=>console.log('This will ASLO never run again.'))();
