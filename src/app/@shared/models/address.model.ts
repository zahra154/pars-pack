export interface AddressModel {
  street: string | undefined;
  suite: string | undefined;
  zipcode: string | undefined;
  geo: GEO | undefined

}

interface GEO  {
  lat: string | undefined;
  long: string | undefined;
}
