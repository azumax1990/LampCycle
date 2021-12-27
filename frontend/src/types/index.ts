
export type SignUpType = {
  email:                 string,
  password:              string,
  password_confirmation: string,
  name:                  string,
  phone_number:          string,
  post_code:             string,
  address:               string,
  building_name:         string | undefined
}

export type SignInType = {
  email:                string,
  password:             string,
}

export type User = {
  id:                  number;
  uid:                 string;
  provider:            string;
  allowPasswordChange: boolean;
  email:               string,
  password:            string,
  passwordConfirm:     string,
  name:                string,
  phoneNumber:         string,
  postCode:            string,
  address:             string,
  buildingName:        string,
  created_at:          Date;
  updated_at:          Date;
}