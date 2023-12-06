const Sequelize = require('sequelize');
module.exports = function (sequelize, DataTypes) {
  return sequelize.define('transportation_programs', {
    transportation_program_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER, allowNull: false,
      primaryKey: true
    },
    is_active: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    program: {
      type: DataTypes.STRING(128), allowNull: false
    },
    organization: {
      type: DataTypes.STRING(128), allowNull: false
    },
    street_address: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "NULL"
    },
    street_address_second: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "NULL"
    },
    city: {
      type: DataTypes.STRING(40),
      allowNull: true,
      defaultValue: "NULL"
    },
    county: {
      type: DataTypes.STRING(56),
      allowNull: true,
      defaultValue: "NULL"
    },
    state: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: "NULL"
    },
    zip: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "NULL"
    },
    website: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: "NULL"
    },
    phone: {
      type: DataTypes.STRING(128),
      allowNull: true,
      defaultValue: "NULL"
    },
    email: {
      type: DataTypes.STRING(64),
      allowNull: true,
      defaultValue: "NULL"
    },
    service_area_description: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: "NULL"
    },
    days_available_monday: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    days_available_tuesday: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    days_available_wednesday: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    days_available_thursday: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    days_available_friday: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    days_available_saturday: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    days_available_sunday: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    days_available_notes: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: "NULL"
    },
    hours_of_operation: {
      type: DataTypes.STRING(12),
      allowNull: true,
      defaultValue: "NULL"
    },
    hours_of_operation_notes: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: "NULL"
    },
    special_requirements: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: "NULL"
    },
    private_notes: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: "NULL"
    },
    date_verified: {
      type: DataTypes.STRING(24),
      allowNull: true,
      defaultValue: "NULL"
    },
    date_created: {
      type: DataTypes.STRING(24),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_by: {
      type: DataTypes.STRING(64), allowNull: false
    },
    date_modified: {
      type: DataTypes.STRING(24),
      allowNull: true,
      defaultValue: "NULL"
    },
    modified_by: {
      type: DataTypes.STRING(64), allowNull: false
    },
    non_transportation_services: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    non_transportation_services_delivery: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    non_transportation_services_home_repair: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    non_transportation_services_housework: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    non_transportation_services_yardwork: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    non_transportation_services_visits: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    non_transportation_services_check_ins: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    non_transportation_services_notes: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: "NULL"
    },
    transportation_door_to_door: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    transportation_curb_to_curb: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    transportation_shared: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    transportation_private: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    transportation_fixed: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    transportation_paratransit: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_medical: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_shopping: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_errands: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_religious: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_social: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_work: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_senior_center: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    purpose_any: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    assistance_wheelchair: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    assistance_mobility_devices: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    assistance_in_and_out: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    assistance_driver_wait: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    assistance_service_animals: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    assistance_help_packages: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    assistance_none: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_cash: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_creditcard: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_check: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_pre_payment: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_insurance: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_medicaid: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_free: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    payment_donations: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    vehicles_used_car: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    vehicles_used_van: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    vehicles_used_bus_train: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    vehicles_used_wheelchair: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    vehicles_used_taxi: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    pricing_flat_fee: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    pricing_mileage: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    pricing_hourly: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    pricing_discount: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    pricing_membership: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    pricing_details: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: "NULL"
    },
    eligibility_public: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_age60plus: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_age65plus: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_disabled: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_blindness: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_illness: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_membership: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_means: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_veteran: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_seniors: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    eligibility_native_american: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_on_demand: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_day_prior: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_days_prior: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_week_prior: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_fixed_schedule: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_other: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_notes: {
      type: DataTypes.STRING(2000),
      allowNull: true,
      defaultValue: "NULL"
    },
    scheduling_options_phone: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_options_email: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_options_form: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    scheduling_options_app: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    rationed_rides: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    long_distance_rides: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_nonprofit: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_public: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_paratransit: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_rideshare: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_non_emergency_medical: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_senior_center: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_private: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_home_care: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    provider_type_other: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    driver_type_volunteers: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    driver_type_paid: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    driver_type_mix: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    training_offered: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    smartphone_application: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    weekend_service_available: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    evening_service_available: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_english: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_spanish: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_chinese: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_tagalog: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_vietnamese: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_arabic: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_french: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_korean: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_russian: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    languages_spoken_portuguese: {
      type: DataTypes.SMALLINT, allowNull: true
    },
    service_areas: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    service_area_zipcodes: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transportation_programs',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "transportation_programs_pkey",
        unique: true,
        fields: [
          { name: "transportation_program_id" },
        ]
      },
    ]
  });
};
