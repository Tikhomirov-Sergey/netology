
angular
    .module('myApp')
        .directive('phoneFormatValidator', function() {
            return {
                require : 'ngModel',
                link : function(scope, element, attrs, ngModel) {
                    ngModel.$parsers.push(function(value) {
                        if(!value || value.length == 0) return;
                        ngModel.$setValidity('phone', /\+\d{11,}/.test(value));
                        return value;
                    });
                }
            };
        });
