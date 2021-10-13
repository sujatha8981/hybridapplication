import { FormBuilder,FormGroup } from "@angular/forms";
import { SignupPageForm } from "./signup.page.form";

describe('SignupPageForm', () => {
    let signupPageForm : SignupPageForm;
    let form : FormGroup;

    beforeEach(() =>{
        signupPageForm = new SignupPageForm(new FormBuilder());
        form = signupPageForm.getForm();
    })

    it('should empty name be invalid', () =>{
        expect(form.get('name').valid).toBeFalsy();
    })

    it('should empty email be invalid', () =>{
        expect(form.get('email').valid).toBeFalsy();
    })

    it('should empty phone be invalid', () =>{
        expect(form.get('phone').valid).toBeFalsy();
    })

    it('should empty password be invalid', () =>{
        expect(form.get('password').valid).toBeFalsy();
    })

    it('should empty confirmpassword be invalid', () =>{
        expect(form.get('confirmpassword').valid).toBeFalsy();
    })

    it('should invalid email be invalid', () =>{
        form.get('email').setValue('Invalid input');
        expect(form.get('email').valid).toBeFalsy();
    })

    it('should password less than 8 characters be invalid', () =>{
        form.get('password').setValue('123456');
        expect(form.get('password').valid).toBeFalsy();
    })

    it('should password password different from confirmpassword be invalid', () =>{
        form.get('password').setValue('anypassword');
        form.get('confirmpassword').setValue('anotherpassword');

        expect(form.get('confirmpassword').valid).toBeFalsy();
    })

    it('should form be valid', () =>{
        form.get('name').setValue('anyname');
        form.get('email').setValue('anyemail');
        form.get('phone').setValue('anyphone');
        form.get('password').setValue('anypassword');
        form.get('confirmpassword').setValue('anypassword');
        
        expect(form.valid).toBeTruthy();
    })

})