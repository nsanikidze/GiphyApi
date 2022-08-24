export class INPUTS{
    constructor(inputs){
        this.inputs = inputs;
    }
    getInputs() {
        let list =this.inputs.map((obj) => {
          return `<input type="button" class="btn btn-sm search-btn" value="${obj.value}" >`;
        });
        return list.join(' ');
    }

    setContent(id, value){
        console.log(2);
        let element = document.getElementById(id);
        element.innerHTML = value;
    };
    
    rander(){
        console.log(1);
        this.setContent("header-buttons", this.getInputs());
    }
}