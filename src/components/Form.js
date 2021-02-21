import React, { useReducer, useState } from 'react';
import '../App.css';
import { Button } from './Button'
import './Form.css';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

function App() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        /*setTimeout(() => {
            setSubmitting(false);
        }, 3000)*/
    }
    
    const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
        setFormData({

            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        });
    }

    return (
        <div className="wrapper">
            <h1>Enter Your Information Below</h1>
            <h2>
                *VaxTrax uses your information in order to find what services are provided in your area, and check what appointment slots you are eligible for.
                When a vaccination slot opens that is right for you, we will contact you using the phone number or email you enter at the bottom.
            </h2>
            {submitting &&
                <div>
                    {/*You are submitting the following:
                    <ul>
                        {Object.entries(formData).map(([name, value]) => (
                            <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                        ))}
                        </ul>*/}
                </div>
            }
            <form onSubmit={handleSubmit}>
                <fieldset class="field_set">
                    <label>
                        <p>State</p>
                        <select class="choose_option" name="State" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Alabama">Alabama</option>
                            <option value="Alaska">Alaska</option>
                            <option value="Arizona">Arizona</option>
                            <option value="Arkansas">Arkansas</option>
                            <option value="California">California</option>
                            <option value="Colorado">Colorado</option>
                            <option value="Connecticut">Connecticut</option>
                            <option value="Delaware">Delaware</option>
                            <option value="Florida">Florida</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Hawaii">Hawaii</option>
                            <option value="Idaho">Idaho</option>
                            <option value="Illinois">Illinois</option>
                            <option value="Indiana">Indiana</option>
                            <option value="Iowa">Iowa</option>
                            <option value="Kansas">Kansas</option>
                            <option value="Kentucky">Kentucky</option>
                            <option value="Louisiana">Louisiana</option>
                            <option value="Maine">Maine</option>
                            <option value="Maryland">Maryland</option>
                            <option value="Missouri">Missouri</option>
                            <option value="Montana">Montana</option>
                            <option value="Nebraska">Nebraska</option>
                            <option value="Nevada">Nevada</option>
                            <option value="New Hampshire">New Hampshire</option>
                            <option value="New Jersey">New Jersey</option>
                            <option value="New Mexico">New Mexico</option>
                            <option value="New York">New York</option>
                            <option value="North Carolina">North Carolina</option>
                            <option value="North Dakota">North Dakota</option>
                            <option value="Ohio">Ohio</option>
                            <option value="Oklahoma">Oklahoma</option>
                            <option value="Oregon">Oregon</option>
                            <option value="Pennsylvania">Pennsylvania</option>
                            <option value="Rhode Island">Rhode Island</option>
                            <option value="South Carolina">South Carolina</option>
                            <option value="South Dakota">South Dakota</option>
                            <option value="Tennessee">Tennessee</option>
                            <option value="Texas">Texas</option>
                            <option value="Utah">Utah</option>
                            <option value="Vermont">Vermont</option>
                            <option value="Virginia">Virginia</option>
                            <option value="Washington">Washington</option>
                            <option value="West Virginia">West Virginia</option>
                            <option value="Wisconsin">Wisconsin</option>
                            <option value="Wyoming">Wyoming</option>
                        </select>
                    </label>
                    <label>
                        <p>County</p>
                        <select class="choose_option" name="County" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Alameda">Alameda</option>
                            <option value="Alpine">Alpine</option>
                            <option value="Amador">Amador</option>
                            <option value="Butte">Butte</option>
                            <option value="Calaveras">Calaveras</option>
                            <option value="Colusa">Colusa</option>
                            <option value="Contra Costa">Contra Costa</option>
                            <option value="Del Norte">Del Norte</option>
                            <option value="El Dorado">El Dorado</option>
                            <option value="Fresno">Fresno</option>
                            <option value="Glenn">Glenn</option>
                            <option value="Humboldt">Humboldt</option>
                            <option value="Imperial">Imperial</option>
                            <option value="Inyo">Inyo</option>
                            <option value="Kern">Kern</option>
                            <option value="Kings">Kings</option>
                            <option value="Lake">Lake</option>
                            <option value="Lassen">Lassen</option>
                            <option value="Los Angeles">Los Angeles</option>
                            <option value="Madera">Madera</option>
                            <option value="Marin">Marin</option>
                            <option value="Mariposa">Mariposa</option>
                            <option value="Mendocino">Mendocino</option>
                            <option value="Merced">Merced</option>
                            <option value="Modoc">Modoc</option>
                            <option value="Mono">Mono</option>
                            <option value="Monterey">Monterey</option>
                            <option value="Napa">Napa</option>
                            <option value="Nevada">Nevada</option>
                            <option value="Orange">Orange</option>
                            <option value="Placer">Placer</option>
                            <option value="Plumas">Plumas</option>
                            <option value="Riverside">Riverside</option>
                            <option value="Sacramento">Sacramento</option>
                            <option value="San Benito">San Benito</option>
                            <option value="San Bernardino">San Bernardino</option>
                            <option value="San Diego">San Diego</option>
                            <option value="San Francisco">San Francisco</option>
                            <option value="San Joaquin">San Joaquin</option>
                            <option value="San Luis Obsipo">San Luis Obsipo</option>
                            <option value="San Mateo">San Mateo</option>
                            <option value="Santa Barbara">Santa Barbara</option>
                            <option value="Santa Clara">Santa Clara</option>
                            <option value="Santa Cruz">Santa Cruz</option>
                            <option value="Shasta">Shasta</option>
                            <option value="Sierra">Sierra</option>
                            <option value="Siskiyou">Siskiyou</option>
                            <option value="Solano">Solano</option>
                            <option value="Sonoma">Sonoma</option>
                            <option value="Stanislaus">Stanislaus</option>
                            <option value="Sutter">Sutter</option>
                            <option value="Tehama">Tehama</option>
                            <option value="Trinity">Trinity</option>
                            <option value="Tulare">Tulare</option>
                            <option value="Tuolumne">Tuolumne</option>
                            <option value="Ventura">Ventura</option>
                            <option value="Yolo">Yolo</option>
                            <option value="Yuba">Yuba</option>
                        </select>
                    </label>
                    <label>
                        <p>Age</p>
                        <input class="enter_value" name="Age" onChange={handleChange} />
                    </label>
                    <label>
                        <p>Are you a healthcare worker? (ex. emergency medical services, nurses, pharmacists, administrative staff)</p>
                        <select class="choose_option" name="Healthcare" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>
                    <label>
                        <p>Are you currently residing in a long-term care facility?</p>
                        <select class="choose_option" name="LongtermCare" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>
                    <label>
                        <p>What industry do you currently work in? (if unsure, check table 2 here: <a href="https://www.cdc.gov/vaccines/covid-19/categories-essential-workers.html">Essential Worker Categories</a>)</p>
                        <select class="choose_option" name="Occupation" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Chemical">Chemical</option>
                            <option value="Commercial">Commercial Facilities</option>
                            <option value="CriticalManufacturing">Critical Manufacturing</option>
                            <option value="Education">Education</option>
                            <option value="Energy">Energy</option>
                            <option value="EssentialGov">Other Community- or Government-based Operations and Essential Functions</option>
                            <option value="FoodAgriculture">Food and Agriculture</option>
                            <option value="Healthcare">Healthcare/Public Health</option>
                            <option value="PublicService">Law Enforcement, Public Safety, and Other First Responders</option>
                            <option value="Residential">Residential/Shelter Facilities, Housing and Real Estate, and Related Services</option>
                            <option value="Transport">Transportation and Logistics</option>
                            <option value="None">None of the above</option>
                        </select>
                    </label>
                    <label>
                        <p>Are you affected by any of the below conditions?</p>
                        <div class="condition_list">
                            <ul>
                                <li>Cancer</li>
                                <li>Chronic Kidney Disease (stage 4 or above)</li>
                                <li>Chronic Pulmonary Disease</li>
                                <li>Down Syndrome</li>
                                <li>Immunocompromised State from Organ Transplant</li>
                                <li>Pregnancy</li>
                                <li>Sickle Cell Disease</li>
                                <li>Heart Conditions (heart failure, coronary artery disease or cardiomyopathies; excludes hypertension)</li>
                                <li>Severe Obesity</li>
                                <li>Type 2 Diabetes Mellitus</li>
                                <li>Other developmental or high-risk disabilities that put an individual at especially high risk </li>
                            </ul>
                        </div>
                        <select class="choose_option" name="LongtermCare" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </label>
                    <label>
                        <p>Do you want to be contacted through email, text, or phone call?</p>
                        <select class="choose_option" name="ContactMethod" onChange={handleChange}>
                            <option value="">--Please choose an option--</option>
                            <option value="Email">Email</option>
                            <option value="Text">Text</option>
                            <option value="Call">Phone Call</option>
                        </select>
                    </label>
                    <label>
                        <p>Please enter your contact information: </p>
                        <input class="enter_value" name="ContactInfo" onChange={handleChange} />
                    </label>
                    {/*<label>
                        <p>Count</p>
                        <input type="number" name="count" onChange={handleChange} step="1" />
                    </label>
                    <label>
                        <p>Gift Wrap</p>
                        <input type="checkbox" name="gift-wrap" onChange={handleChange} />
                    </label>*/}
                    <p></p>
                    <button class="submit_button" type="submit">Submit</button>
                    {submitting &&
                        <div>
                            <p style={{color:"red", marginTop: "0px"}}>Thank you for submitting! Please watch out for a verification email/text/phone call.</p>
                        <p></p>
                        </div>
                    }
                </fieldset>
            </form>
        </div>
    )
}

export default App;