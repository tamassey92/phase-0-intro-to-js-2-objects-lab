const employee = {
    name: "",
    streetAddress: "",
}

function  updateEmployeeWithKeyAndValue(obj, key, value){
return {
...obj, 
[key]: value,
};
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
  
    return obj;
  }