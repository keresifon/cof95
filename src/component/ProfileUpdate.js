import React, { useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
//import { Redirect } from 'react-router-dom';
import Layout from "./Layout";
import Amplify, { API } from "aws-amplify";
import awsconfig from "../aws-exports";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Button } from "react-bootstrap";
import _ from "lodash";
import { getAccounts } from "../services/accountService";
import CloudinaryUpload from "./CloudinaryUpload";
import { ImgUpContext, UserContext } from "../context/Context";

Amplify.configure(awsconfig);

function ProfileUpdate(props) {
  const [user] = useContext(UserContext);
  const [imageUrl] = useContext(ImgUpContext);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      id: "",
      email: "",
      fullname: "",
      nickname: "",
      phone: "",
      address: "",
      bio: "",
      twitter: "",
      facebook: "",
      imgURL: "",
      country: "",
      tshirt: "",
      birthmonth: "",
    },
  });

  useEffect(() => {
    async function gAccount() {
      const data = await getAccounts();
      const members = [...data];
      const cmember = _.filter(members, function (mem) {
        return mem.id === user;
      });
      const member = Object.assign({}, ...cmember);
      //setMember(member);
      reset(member);
    }
    gAccount();
  }, [user, reset]);

  const onSubmit = async (data) => {
    //e.preventDefault();

    const myInit = {
      // OPTIONAL
      body: {
        id: user,
        email: data.email,
        fullname: data.fullname,
        nickname: data.nickname,
        phone: data.phone,
        address: data.address,
        bio: data.bio,
        twitter: data.twitter,
        facebook: data.facebook,
        imgURL: imageUrl,
        country: data.country,
        tshirt: data.tshirt,
        birthmonth: data.birthmonth,
      },
    };

    await API.put("users", "/users", myInit);

    props.history.push("/profile");
  };
  return (
    <Layout>
      <div className="container py-3">
        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="card-body">
                <CloudinaryUpload />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <div className="col p-2">
                  <input
                    type="text"
                    placeholder="Fullname"
                    className="form-control"
                    {...register("fullname")}
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nickname"
                    {...register("nickname")}
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <input
                    id="phone"
                    type="text"
                    placeholder="Phone"
                    className="form-control"
                    {...register("phone")}
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <textarea
                    type="textarea"
                    placeholder="Address"
                    className="form-control"
                    {...register("address")}
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <select {...register("country")} className="form-select">
                    <option value="Country	"> Select Country </option>
                    <option value="Afghanistan	"> Afghanistan </option>
                    <option value="Albania	"> Albania </option>
                    <option value="Algeria	"> Algeria </option>
                    <option value="Andorra	"> Andorra </option>
                    <option value="Angola	"> Angola </option>
                    <option value="Antigua and Barbuda	">
                      {" "}
                      Antigua and Barbuda{" "}
                    </option>
                    <option value="Argentina	"> Argentina </option>
                    <option value="Armenia	"> Armenia </option>
                    <option value="Australia	"> Australia </option>
                    <option value="Austria	"> Austria </option>
                    <option value="Azerbaijan	"> Azerbaijan </option>
                    <option value="Bahamas	"> Bahamas </option>
                    <option value="Bahrain	"> Bahrain </option>
                    <option value="Bangladesh	"> Bangladesh </option>
                    <option value="Barbados	"> Barbados </option>
                    <option value="Belarus	"> Belarus </option>
                    <option value="Belgium	"> Belgium </option>
                    <option value="Belize	"> Belize </option>
                    <option value="Benin	"> Benin </option>
                    <option value="Bhutan	"> Bhutan </option>
                    <option value="Bolivia	"> Bolivia </option>
                    <option value="Bosnia and Herzegovina	">
                      {" "}
                      Bosnia and Herzegovina{" "}
                    </option>
                    <option value="Botswana	"> Botswana </option>
                    <option value="Brazil	"> Brazil </option>
                    <option value="Brunei 	"> Brunei  </option>
                    <option value="Bulgaria	"> Bulgaria </option>
                    <option value="Burkina Faso	"> Burkina Faso </option>
                    <option value="Burundi	"> Burundi </option>
                    <option value="Côte d'Ivoire	"> Côte d'Ivoire </option>
                    <option value="Cabo Verde	"> Cabo Verde </option>
                    <option value="Cambodia	"> Cambodia </option>
                    <option value="Cameroon	"> Cameroon </option>
                    <option value="Canada	"> Canada </option>
                    <option value="Central African Republic	">
                      {" "}
                      Central African Republic{" "}
                    </option>
                    <option value="Chad	"> Chad </option>
                    <option value="Chile	"> Chile </option>
                    <option value="China	"> China </option>
                    <option value="Colombia	"> Colombia </option>
                    <option value="Comoros	"> Comoros </option>
                    <option value="Congo (Congo-Brazzaville)	">
                      {" "}
                      Congo (Congo-Brazzaville){" "}
                    </option>
                    <option value="Costa Rica	"> Costa Rica </option>
                    <option value="Croatia	"> Croatia </option>
                    <option value="Cuba	"> Cuba </option>
                    <option value="Cyprus	"> Cyprus </option>
                    <option value="Czechia (Czech Republic)	">
                      {" "}
                      Czechia (Czech Republic){" "}
                    </option>
                    <option value="Democratic Republic of the Congo	">
                      {" "}
                      Democratic Republic of the Congo{" "}
                    </option>
                    <option value="Denmark	"> Denmark </option>
                    <option value="Djibouti	"> Djibouti </option>
                    <option value="Dominica	"> Dominica </option>
                    <option value="Dominican Republic	">
                      {" "}
                      Dominican Republic{" "}
                    </option>
                    <option value="Ecuador	"> Ecuador </option>
                    <option value="Egypt	"> Egypt </option>
                    <option value="El Salvador	"> El Salvador </option>
                    <option value="Equatorial Guinea	">
                      {" "}
                      Equatorial Guinea{" "}
                    </option>
                    <option value="Eritrea	"> Eritrea </option>
                    <option value="Estonia	"> Estonia </option>
                    <option value="Eswatini(Swaziland)	">
                      {" "}
                      Eswatini (fmr. "Swaziland"){" "}
                    </option>
                    <option value="Ethiopia	"> Ethiopia </option>
                    <option value="Fiji	"> Fiji </option>
                    <option value="Finland	"> Finland </option>
                    <option value="France	"> France </option>
                    <option value="Gabon	"> Gabon </option>
                    <option value="Gambia	"> Gambia </option>
                    <option value="Georgia	"> Georgia </option>
                    <option value="Germany	"> Germany </option>
                    <option value="Ghana	"> Ghana </option>
                    <option value="Greece	"> Greece </option>
                    <option value="Grenada	"> Grenada </option>
                    <option value="Guatemala	"> Guatemala </option>
                    <option value="Guinea	"> Guinea </option>
                    <option value="Guinea-Bissau	"> Guinea-Bissau </option>
                    <option value="Guyana	"> Guyana </option>
                    <option value="Haiti	"> Haiti </option>
                    <option value="Holy See	"> Holy See </option>
                    <option value="Honduras	"> Honduras </option>
                    <option value="Hungary	"> Hungary </option>
                    <option value="Iceland	"> Iceland </option>
                    <option value="India	"> India </option>
                    <option value="Indonesia	"> Indonesia </option>
                    <option value="Iran	"> Iran </option>
                    <option value="Iraq	"> Iraq </option>
                    <option value="Ireland	"> Ireland </option>
                    <option value="Israel	"> Israel </option>
                    <option value="Italy	"> Italy </option>
                    <option value="Jamaica	"> Jamaica </option>
                    <option value="Japan	"> Japan </option>
                    <option value="Jordan	"> Jordan </option>
                    <option value="Kazakhstan	"> Kazakhstan </option>
                    <option value="Kenya	"> Kenya </option>
                    <option value="Kiribati	"> Kiribati </option>
                    <option value="Kuwait	"> Kuwait </option>
                    <option value="Kyrgyzstan	"> Kyrgyzstan </option>
                    <option value="Laos	"> Laos </option>
                    <option value="Latvia	"> Latvia </option>
                    <option value="Lebanon	"> Lebanon </option>
                    <option value="Lesotho	"> Lesotho </option>
                    <option value="Liberia	"> Liberia </option>
                    <option value="Libya	"> Libya </option>
                    <option value="Liechtenstein	"> Liechtenstein </option>
                    <option value="Lithuania	"> Lithuania </option>
                    <option value="Luxembourg	"> Luxembourg </option>
                    <option value="Madagascar	"> Madagascar </option>
                    <option value="Malawi	"> Malawi </option>
                    <option value="Malaysia	"> Malaysia </option>
                    <option value="Maldives	"> Maldives </option>
                    <option value="Mali	"> Mali </option>
                    <option value="Malta	"> Malta </option>
                    <option value="Marshall Islands	"> Marshall Islands </option>
                    <option value="Mauritania	"> Mauritania </option>
                    <option value="Mauritius	"> Mauritius </option>
                    <option value="Mexico	"> Mexico </option>
                    <option value="Micronesia	"> Micronesia </option>
                    <option value="Moldova	"> Moldova </option>
                    <option value="Monaco	"> Monaco </option>
                    <option value="Mongolia	"> Mongolia </option>
                    <option value="Montenegro	"> Montenegro </option>
                    <option value="Morocco	"> Morocco </option>
                    <option value="Mozambique	"> Mozambique </option>
                    <option value="Myanmar (formerly Burma)	">
                      {" "}
                      Myanmar (formerly Burma){" "}
                    </option>
                    <option value="Namibia	"> Namibia </option>
                    <option value="Nauru	"> Nauru </option>
                    <option value="Nepal	"> Nepal </option>
                    <option value="Netherlands	"> Netherlands </option>
                    <option value="New Zealand	"> New Zealand </option>
                    <option value="Nicaragua	"> Nicaragua </option>
                    <option value="Niger	"> Niger </option>
                    <option value="Nigeria	"> Nigeria </option>
                    <option value="North Korea	"> North Korea </option>
                    <option value="North Macedonia	"> North Macedonia </option>
                    <option value="Norway	"> Norway </option>
                    <option value="Oman	"> Oman </option>
                    <option value="Pakistan	"> Pakistan </option>
                    <option value="Palau	"> Palau </option>
                    <option value="Palestine State	"> Palestine State </option>
                    <option value="Panama	"> Panama </option>
                    <option value="Papua New Guinea	"> Papua New Guinea </option>
                    <option value="Paraguay	"> Paraguay </option>
                    <option value="Peru	"> Peru </option>
                    <option value="Philippines	"> Philippines </option>
                    <option value="Poland	"> Poland </option>
                    <option value="Portugal	"> Portugal </option>
                    <option value="Qatar	"> Qatar </option>
                    <option value="Romania	"> Romania </option>
                    <option value="Russia	"> Russia </option>
                    <option value="Rwanda	"> Rwanda </option>
                    <option value="Saint Kitts and Nevis	">
                      {" "}
                      Saint Kitts and Nevis{" "}
                    </option>
                    <option value="Saint Lucia	"> Saint Lucia </option>
                    <option value="Saint Vincent and the Grenadines	">
                      {" "}
                      Saint Vincent and the Grenadines{" "}
                    </option>
                    <option value="Samoa	"> Samoa </option>
                    <option value="San Marino	"> San Marino </option>
                    <option value="Sao Tome and Principe	">
                      {" "}
                      Sao Tome and Principe{" "}
                    </option>
                    <option value="Saudi Arabia	"> Saudi Arabia </option>
                    <option value="Senegal	"> Senegal </option>
                    <option value="Serbia	"> Serbia </option>
                    <option value="Seychelles	"> Seychelles </option>
                    <option value="Sierra Leone	"> Sierra Leone </option>
                    <option value="Singapore	"> Singapore </option>
                    <option value="Slovakia	"> Slovakia </option>
                    <option value="Slovenia	"> Slovenia </option>
                    <option value="Solomon Islands	"> Solomon Islands </option>
                    <option value="Somalia	"> Somalia </option>
                    <option value="South Africa	"> South Africa </option>
                    <option value="South Korea	"> South Korea </option>
                    <option value="South Sudan	"> South Sudan </option>
                    <option value="Spain	"> Spain </option>
                    <option value="Sri Lanka	"> Sri Lanka </option>
                    <option value="Sudan	"> Sudan </option>
                    <option value="Suriname	"> Suriname </option>
                    <option value="Sweden	"> Sweden </option>
                    <option value="Switzerland	"> Switzerland </option>
                    <option value="Syria	"> Syria </option>
                    <option value="Tajikistan	"> Tajikistan </option>
                    <option value="Tanzania	"> Tanzania </option>
                    <option value="Thailand	"> Thailand </option>
                    <option value="Timor-Leste	"> Timor-Leste </option>
                    <option value="Togo	"> Togo </option>
                    <option value="Tonga	"> Tonga </option>
                    <option value="Trinidad and Tobago	">
                      {" "}
                      Trinidad and Tobago{" "}
                    </option>
                    <option value="Tunisia	"> Tunisia </option>
                    <option value="Turkey	"> Turkey </option>
                    <option value="Turkmenistan	"> Turkmenistan </option>
                    <option value="Tuvalu	"> Tuvalu </option>
                    <option value="Uganda	"> Uganda </option>
                    <option value="Ukraine	"> Ukraine </option>
                    <option value="United Arab Emirates	">
                      {" "}
                      United Arab Emirates{" "}
                    </option>
                    <option value="United Kingdom	"> United Kingdom </option>
                    <option value="United States of America	">
                      {" "}
                      United States of America{" "}
                    </option>
                    <option value="Uruguay	"> Uruguay </option>
                    <option value="Uzbekistan	"> Uzbekistan </option>
                    <option value="Vanuatu	"> Vanuatu </option>
                    <option value="Venezuela	"> Venezuela </option>
                    <option value="Vietnam	"> Vietnam </option>
                    <option value="Yemen	"> Yemen </option>
                    <option value="Zambia	"> Zambia </option>
                    <option value="Zimbabwe	"> Zimbabwe </option>
                  </select>
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <textarea
                    type="text-area"
                    placeholder="Bio"
                    className="form-control"
                    {...register("bio")}
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <select {...register("birthmonth")} className="form-select">
                    <option value="Select">Select Birth Month</option>
                    <option value="January"> January </option>
                    <option value="February"> February </option>
                    <option value="March"> March </option>
                    <option value="April"> April </option>
                    <option value="May"> May </option>
                    <option value="June"> June </option>
                    <option value="July"> July </option>
                    <option value="August"> August </option>
                    <option value="September"> September </option>
                    <option value="October"> October </option>
                    <option value="November"> November </option>
                    <option value="December"> December </option>{" "}
                  </select>{" "}
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <select {...register("tshirt")} className="form-select">
                    <option value="XS">Select Tshirt SIze</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                  </select>
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <input
                    type="text"
                    placeholder="@twitter"
                    className="form-control"
                    {...register("twitter")}
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <input
                    type="text"
                    placeholder="@facebook"
                    className="form-control"
                    {...register("facebook")}
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <input
                    type="text"
                    placeholder="image"
                    className="form-control"
                    {...register("imgURL")}
                    readOnly
                  />
                </div>
              </div>
              <div>
                <div className="col p-2">
                  <Button type="submit" variant="outline-secondary">
                    Submit
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default withAuthenticator(ProfileUpdate);
