export interface OrgState {
  savedOrgs: Suggestion[];
}

export interface SwitchState {
  activeSwitch: "new" | "saved";
}

export interface RootState {
  switch: SwitchState;
  organizations: OrgState;
}

export interface Suggestion {
  value: string;
  unrestricted_value: string;
  data: OrganizationData;
}

export interface Management {
  name: string | null;
  post: string | null;
  disqualified: boolean | null;
}

export interface MetroStation {
  name: string;
  line: string;
  distance: number;
}

export interface AddressData {
  postal_code: string;
  country: string;
  country_iso_code: string;
  federal_district: string;
  region_fias_id: string;
  region_kladr_id: string;
  region_iso_code: string;
  region_with_type: string;
  region_type: string;
  region_type_full: string;
  region: string;
  area_fias_id: string | null;
  area_kladr_id: string | null;
  area_with_type: string | null;
  area_type: string | null;
  area_type_full: string | null;
  area: string | null;
  city_fias_id: string;
  city_kladr_id: string;
  city_with_type: string;
  city_type: string;
  city_type_full: string;
  city: string;
  city_area: string;
  city_district_fias_id: string | null;
  city_district_kladr_id: string | null;
  city_district_with_type: string;
  city_district_type: string;
  city_district_type_full: string;
  city_district: string;
  settlement_fias_id: string | null;
  settlement_kladr_id: string | null;
  settlement_with_type: string | null;
  settlement_type: string | null;
  settlement_type_full: string | null;
  settlement: string | null;
  street_fias_id: string;
  street_kladr_id: string;
  street_with_type: string;
  street_type: string;
  street_type_full: string;
  street: string;
  stead_fias_id: string | null;
  stead_cadnum: string | null;
  stead_type: string | null;
  stead_type_full: string | null;
  stead: string | null;
  house_fias_id: string;
  house_kladr_id: string;
  house_cadnum: string;
  house_flat_count: number | null;
  house_type: string;
  house_type_full: string;
  house: string;
  block_type: string;
  block_type_full: string;
  block: string;
  entrance: string | null;
  floor: string | null;
  flat_fias_id: string | null;
  flat_cadnum: string | null;
  flat_type: string | null;
  flat_type_full: string | null;
  flat: string | null;
  flat_area: string;
  square_meter_price: string;
  flat_price: number | null;
  room_fias_id: string | null;
  room_cadnum: string | null;
  room_type: string | null;
  room_type_full: string | null;
  room: string | null;
  postal_box: string | null;
  fias_id: string;
  fias_code: string;
  fias_level: string;
  fias_actuality_state: string;
  kladr_id: string;
  geoname_id: string;
  capital_marker: string;
  okato: string;
  oktmo: string;
  tax_office: string;
  tax_office_legal: string;
  timezone: string;
  geo_lat: string;
  geo_lon: string;
  beltway_hit: string;
  beltway_distance: number | null;
  metro: MetroStation[];
  divisions: string | null;
  qc_geo: string;
  qc_complete: string | null;
  qc_house: string | null;
  history_values: string | null;
  unparsed_parts: string | null;
  source: string;
  qc: string;
}

export interface Address {
  value: string;
  unrestricted_value: string;
  invalidity: string | null;
  data: AddressData;
}

export interface OrganizationData {
  kpp: string;
  capital: number | null;
  management: Management;
  founders: string | null;
  managers: string | null;
  predecessors: string | null;
  successors: string | null;
  branch_type: string;
  branch_count: number;
  source: string | null;
  qc: string | null;
  hid: string;
  type: string;
  state: {
    status: string;
    actuality_date: number;
    registration_date: number;
    liquidation_date: number | null;
  };
  opf: {
    type: string;
    code: string;
    full: string;
    short: string;
  };
  name: {
    full_with_opf: string;
    short_with_opf: string;
    latin: string | null;
    full: string;
    short: string;
  };
  inn: string;
  ogrn: string;
  okato: string;
  oktmo: string;
  okpo: string;
  okogu: string;
  okfs: string;
  okved: string;
  okveds: string | null;
  authorities: string | null;
  documents: string | null;
  licenses: string | null;
  finance: string | null;
  address: Address;
  phones: string | null;
  emails: string | null;
  ogrn_date: number;
  okved_type: string;
  employee_count: number | null;
}

export interface SaveButtonProps {
  isSaved: boolean;
  onClick: () => void;
}

export interface SavedOrgListProps {
  savedOrgs: Suggestion[];
  onRemove: (inn: string) => void;
}

export interface SelectedOrganizationProps {
  selectedOrg: Suggestion;
  isSaved: boolean;
  handleSaveOrganization: () => void;
}

export interface SavedOrgItemProps {
  organization: Suggestion;
  onRemove: (inn: string) => void;
}

export interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
  suggestions: Suggestion[];
  onSelect: (item: Suggestion) => void;
}
