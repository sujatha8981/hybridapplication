import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class SignupPageForm{

    private formBuilder:FormBuilder;
    private form:FormGroup;
    
    constructor(formBuilder:FormBuilder){
        this.formBuilder = formBuilder;
        this.form = this.createForm();
    }
    private createForm():FormGroup{
        let form = this.formBuilder.group({
            name:['',[Validators.required]],
            email:['',[Validators.required, Validators.email]],
            phone:['',[Validators.required, Validators.minLength(8)]],
            password:['',[Validators.required]],
            confirmpassword:['',[Validators.required]]

        })
        form.get('confirmpassword').setValidators(matchPasswordAndRepeatPassword(form))

        return form;
    }
    getForm() : FormGroup{
        return this.form;
    }
}

function matchPasswordAndRepeatPassword(form : FormGroup) : ValidatorFn{
    const password = form.get('password');
    const confirmpassword = form.get('confirmpassword');

    const Validator =() => {
        return password.value == confirmpassword.value ? null: {isntMatching: true}
    };
    return Validator;

}