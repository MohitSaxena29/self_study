"use strict";
var UsersUtils;
(function (UsersUtils) {
    class Parent {
        setName(name) {
            return this.name = name;
        }
    }
    UsersUtils.Parent = Parent;
})(UsersUtils || (UsersUtils = {}));
