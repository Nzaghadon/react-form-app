
import { Checkbox, FormControlLabel, Radio } from '@mui/material';
import { Button } from 'bootstrap';
import { useForm } from 'react-hook-form'



export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            userName: '',
            mail: '',
            address: '',
            country: '',
            state: '',
            cardName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',


        }
    });
    const onSubmit = (data) => console.log(data);


    return (
        <>
            <div className='Form'>
                <header><h1>Payment Form</h1></header><br />
                <p>Complete this form to make your purchase.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor='firstName'>First name</label><br />
                        <input {...register("firstName", { required: true })}
                            aria-invalid={errors.firstName?.message} />
                        {errors.firstName?.type === 'required' && <p className='warning' role="alert">First name is required</p>}

                    </div><br />
                    <div>
                        <label>Last name</label><br />
                        <input {...register("lastName", { required: true })}
                            aria-invalid={errors.lastName?.message} />
                        {errors.lastName?.type === 'required' && <p className='warning' role="alert">Last name is required</p>}
                    </div><br />
                    <div>
                        <label>Username</label><br />
                        <input {...register("userName", { required: true })}
                            aria-invalid={errors.userName?.message} />
                        {errors.userName?.type === 'required' && <p className='warning' role="alert">Username is required</p>}
                    </div><br />
                    <div>
                        <label>Email</label><br />
                        <input type="email" {...register("mail", { required: true, pattern: /^[a-z@.]/g })}
                            aria-invalid={errors.mail?.message} />
                        {errors.mail?.type === 'pattern' && <p className='warning' role="alert">This Email is not valid</p>}
                        {errors.mail?.type === 'required' && <p className='warning' role="alert">Email is required</p>}
                    </div><br />
                    <div>
                        <label>Address</label><br />
                        <input {...register("address", { required: true })}
                            aria-invalid={errors.address?.message} />
                        {errors.address?.type === 'required' && <p className='warning' role="alert">Address is required</p>}
                    </div><br />
                    <div className='Country'>
                        <label>Country</label><br />
                        <select {...register("country", { required: true })}>
                            <option>U.S.A.</option>
                            <option>China</option>
                            <option>Nigeria</option>
                        </select>
                    </div><br />
                    <div>
                        <label>State</label><br />
                        <input {...register("state", { required: true })} />
                    </div><br /><hr />
                    <div>
                        <FormControlLabel control={<Checkbox />} label="Save this information for next time." />
                    </div><br /><hr />
                    <div>
                        <h3><p>Payment</p></h3>
                        {/*  <FormControlLabel value="creditCard" control={<Radio />} label="Credit card" />
                        <FormControlLabel value="debitCard" control={<Radio />} label="Debit card" />
                        <FormControlLabel value="paypal" control={<Radio />} label="Paypal" /> */}
                        <input type="radio" defaultChecked name='creditCard' />
                        <label htmlFor="creditCard">Credit card</label>
                        <input type="radio" name='debitCard' />
                        <label htmlFor="debitCard">Debit card</label>
                        <input type="radio" name='paypal' />
                        <label htmlFor="paypal">Paypal</label>
                    </div><br />
                    <div>
                        <label>Name on card</label><br />
                        <input placeholder='fullname as displayed on the card' {...register("cardName", { required: true })} />
                    </div><br />
                    <div>
                        <label>Number on card</label><br />
                        <input  {...register("cardNumber", { required: true, pattern: /[0-9]/ })} />
                    </div><br />
                    <div>
                        <label>Expiration</label><br />
                        <input type="date" {...register("expiryDate")} /><br /><br />
                        <label>CVV</label><br />
                        <input type="number" {...register("cvv", { required: true, minLength: 3, maxLength: 3 })} />
                        {errors.cvv?.type === 'minLength' && <p className='warning' role="alert">this CVV is not valid</p>}
                        {errors.cvv?.type === 'maxLength' && <p className='warning' role="alert">this CVV is not valid</p>}
                    </div><br /><hr />

                    <input className='Submit' type="submit" />



                </form >

            </div >
        </>
    )
}