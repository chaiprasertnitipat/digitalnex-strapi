import type { Schema, Attribute } from '@strapi/strapi';

export interface FormComponentCaptcha extends Schema.Component {
  collectionName: 'components_form_component_captchas';
  info: {
    displayName: 'captcha';
    icon: 'check';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    field_setting: Attribute.Component<'form-component.field-setting'>;
  };
}

export interface FormComponentCheckboxItem extends Schema.Component {
  collectionName: 'components_form_component_checkbox_items';
  info: {
    displayName: 'checkbox_item';
    icon: 'check';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    value: Attribute.String;
    name_attribute: Attribute.String;
    id_attribute: Attribute.String;
  };
}

export interface FormComponentCheckbox extends Schema.Component {
  collectionName: 'components_form_component_checkboxes';
  info: {
    displayName: 'checkbox';
    icon: 'check';
    description: '';
  };
  attributes: {
    items: Attribute.Component<'form-component.checkbox-item', true>;
    field_setting: Attribute.Component<'form-component.field-setting'>;
  };
}

export interface FormComponentConsent extends Schema.Component {
  collectionName: 'components_form_component_consents';
  info: {
    displayName: 'consent';
    icon: 'check';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    value: Attribute.String;
    field_setting: Attribute.Component<'form-component.field-setting'>;
  };
}

export interface FormComponentFieldSetting extends Schema.Component {
  collectionName: 'components_form_component_field_settings';
  info: {
    displayName: 'field_setting';
    icon: 'cog';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    is_required: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    name_attribute: Attribute.String;
    id_attribute: Attribute.String;
  };
}

export interface FormComponentInput extends Schema.Component {
  collectionName: 'components_form_component_inputs';
  info: {
    displayName: 'input';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String;
    min_length: Attribute.Integer;
    max_length: Attribute.Integer;
    value_type: Attribute.Enumeration<
      ['Freeform', 'Number', 'Phone', 'Email']
    > &
      Attribute.Required;
    field_setting: Attribute.Component<'form-component.field-setting'>;
  };
}

export interface FormComponentRadioItem extends Schema.Component {
  collectionName: 'components_form_component_radio_items';
  info: {
    displayName: 'radio_item';
    icon: 'typhoon';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    value: Attribute.String;
  };
}

export interface FormComponentRadio extends Schema.Component {
  collectionName: 'components_form_component_radios';
  info: {
    displayName: 'radio';
    icon: 'bulletList';
  };
  attributes: {
    items: Attribute.Component<'form-component.radio-item', true>;
    field_setting: Attribute.Component<'form-component.field-setting'>;
  };
}

export interface FormComponentTextarea extends Schema.Component {
  collectionName: 'components_form_component_textareas';
  info: {
    displayName: 'textarea';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    placeholder: Attribute.String;
    min_length: Attribute.Integer;
    max_length: Attribute.Integer;
    value_type: Attribute.Enumeration<
      ['Freeform', 'Number', 'Phone', 'Email']
    > &
      Attribute.Required;
    rows: Attribute.Integer;
    field_setting: Attribute.Component<'form-component.field-setting'>;
  };
}

export interface ListingComponentCardNoLink extends Schema.Component {
  collectionName: 'components_listing_component_card_no_links';
  info: {
    displayName: 'card-no-link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ListingComponentCard extends Schema.Component {
  collectionName: 'components_listing_component_cards';
  info: {
    displayName: 'card';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'shared-component.link'>;
    image: Attribute.Media;
  };
}

export interface ListingComponentContent extends Schema.Component {
  collectionName: 'components_listing_component_contents';
  info: {
    displayName: 'content';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    content: Attribute.Component<'shared-component.editor'>;
  };
}

export interface ListingComponentExtra extends Schema.Component {
  collectionName: 'components_listing_component_extras';
  info: {
    displayName: 'extra';
    icon: 'file';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Component<'shared-component.image-2-device'>;
    content: Attribute.Component<'shared-component.alignment'>;
    button: Attribute.Component<'shared-component.link'>;
  };
}

export interface ListingComponentImage extends Schema.Component {
  collectionName: 'components_listing_component_images';
  info: {
    displayName: 'image';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.Component<'shared-component.link'>;
    Image: Attribute.Media;
  };
}

export interface ListingComponentText extends Schema.Component {
  collectionName: 'components_listing_component_texts';
  info: {
    displayName: 'text';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface MyComponentAbout extends Schema.Component {
  collectionName: 'components_my_component_abouts';
  info: {
    displayName: 'About';
    icon: 'information';
    description: '';
  };
  attributes: {
    listing_style: Attribute.Enumeration<
      ['Icon', 'Value', 'Check', 'Number', 'Accordion']
    > &
      Attribute.Required;
    layout: Attribute.Enumeration<
      ['No image', 'Image first', 'Content first']
    > &
      Attribute.Required;
    listing_column: Attribute.Enumeration<
      ['one col', 'two col', 'three col', 'four col']
    > &
      Attribute.Required;
    listing_display: Attribute.Enumeration<['Vertical', 'Horizontal']> &
      Attribute.Required;
    listing_alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.Required;
    listing_content: Attribute.Component<
      'listing-component.card-no-link',
      true
    >;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
    image: Attribute.Media;
    title: Attribute.Component<'shared-component.title'>;
    content: Attribute.Component<'shared-component.editor'>;
    button: Attribute.Component<'shared-component.button'>;
  };
}

export interface MyComponentBanners extends Schema.Component {
  collectionName: 'components_my_component_banners';
  info: {
    displayName: 'Banners';
    icon: 'picture';
  };
  attributes: {
    banners: Attribute.Component<'shared-component.banner', true>;
  };
}

export interface MyComponentCallToAction extends Schema.Component {
  collectionName: 'components_my_component_call_to_actions';
  info: {
    displayName: 'Call to action';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    design: Attribute.Enumeration<
      [
        'BG Transparent',
        'BG Container',
        'BG Fullwidth',
        'BG Fullwidth with frame'
      ]
    > &
      Attribute.Required;
    background: Attribute.Component<'shared-component.background'>;
    nexitor: Attribute.Component<'shared-component.nexitor'>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentClient extends Schema.Component {
  collectionName: 'components_my_component_clients';
  info: {
    displayName: 'Client';
    icon: 'user';
    description: '';
  };
  attributes: {
    section_layout: Attribute.Enumeration<
      ['Horizontal ', 'Vertical ', 'Vertical - Logo slide']
    > &
      Attribute.Required;
    listing_column: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_background: Attribute.Enumeration<
      ['White', 'Light grey', 'Dark grey', 'Black']
    > &
      Attribute.Required;
    title: Attribute.Component<'shared-component.title'>;
    listing_content: Attribute.Component<'listing-component.image', true>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentContentWithImage extends Schema.Component {
  collectionName: 'components_my_component_content_with_images';
  info: {
    displayName: 'Content with Image';
    icon: 'picture';
  };
  attributes: {
    content_layout_desktop: Attribute.Enumeration<
      ['Content with Image left', 'Content with Image right']
    >;
    content_layout_mobile: Attribute.Enumeration<
      ['Image first', 'Content first']
    >;
    nexitor: Attribute.Component<'shared-component.nexitor'>;
    image: Attribute.Component<'shared-component.image-2-device'>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentContent extends Schema.Component {
  collectionName: 'components_my_component_contents';
  info: {
    displayName: 'Content';
    icon: 'file';
  };
  attributes: {
    nexitor: Attribute.Component<'shared-component.nexitor'>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentFaqs extends Schema.Component {
  collectionName: 'components_my_component_faqs';
  info: {
    displayName: 'FAQs';
    icon: 'lightbulb';
  };
  attributes: {
    section_layout: Attribute.Enumeration<['Vertical', 'Horizontal']> &
      Attribute.Required;
    listing_style: Attribute.Enumeration<['Classic', 'FAQ']> &
      Attribute.Required;
    listing_background: Attribute.Enumeration<
      ['Transparent background', 'Light background', 'Dark background']
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Transparent background'>;
    title: Attribute.Component<'shared-component.title'>;
    listing_content: Attribute.Component<'listing-component.content'>;
    show_first: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentFeatureIcon extends Schema.Component {
  collectionName: 'components_my_component_feature_icons';
  info: {
    displayName: 'Feature-icon';
    icon: 'information';
  };
  attributes: {
    icon_design: Attribute.Enumeration<
      [
        'Icon - Transparent background',
        'Icon - Circle background',
        'Icon - Square background'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Icon - Transparent background'>;
    icon_background_color: Attribute.String;
    icon_size: Attribute.Enumeration<['Small', 'Medium', 'Large', 'Extra']> &
      Attribute.Required &
      Attribute.DefaultTo<'Medium'>;
    listing_background: Attribute.Enumeration<
      [
        'Transparent background',
        'Light background',
        'Dark background',
        'Color background'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Transparent background'>;
    listing_background_color: Attribute.String;
    listing_display: Attribute.Enumeration<['Vertical', 'Horizontal']> &
      Attribute.Required &
      Attribute.DefaultTo<'Vertical'>;
    listing_alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.Required &
      Attribute.DefaultTo<'Left'>;
    listing_column_desktop: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_column_mobile: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_slide_desktop: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    listing_slide_mobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.Component<'shared-component.title'>;
    listing_content: Attribute.Component<'listing-component.card', true>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentFeatureImage extends Schema.Component {
  collectionName: 'components_my_component_feature_images';
  info: {
    displayName: 'Feature-image';
    icon: 'picture';
  };
  attributes: {
    section_layout: Attribute.Enumeration<['Container', 'Fullwidth']> &
      Attribute.Required;
    section_display: Attribute.Enumeration<
      [
        'Vertical',
        'Horizontal - Content 50% | Listing 50%',
        'Horizontal - Content 30% | Listing 70%'
      ]
    > &
      Attribute.Required;
    listing_style: Attribute.Enumeration<['Style 1', 'Style 2', 'Style 3']> &
      Attribute.Required;
    roll_over_card_style: Attribute.Enumeration<['None', 'style 1']> &
      Attribute.Required;
    listing_content_position: Attribute.Enumeration<
      [
        'Top - Left',
        'Top - Center',
        'Top - Right',
        'Middle - Left',
        'Middle - Center',
        'Middle - Right',
        'Bottom - Left',
        'Bottom - Center',
        'Bottom - Right'
      ]
    > &
      Attribute.Required;
    listing_column_desktop: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_column_mobile: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_slide_desktop: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    listing_slide_mobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    listing_space: Attribute.String;
    title: Attribute.Component<'shared-component.title'>;
    button: Attribute.Component<'shared-component.button'>;
    listing_content: Attribute.Component<'listing-component.card', true>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentFeatureList extends Schema.Component {
  collectionName: 'components_my_component_feature_lists';
  info: {
    displayName: 'Feature-list';
    icon: 'bulletList';
  };
  attributes: {
    listing_design: Attribute.Enumeration<['Check', 'Number', 'Arrow']> &
      Attribute.Required;
    listing_column: Attribute.Enumeration<
      ['one col', 'two col', 'three col', 'four col']
    > &
      Attribute.Required;
    title: Attribute.Component<'shared-component.title'>;
    listing_content: Attribute.Component<'listing-component.content', true>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentImage extends Schema.Component {
  collectionName: 'components_my_component_images';
  info: {
    displayName: 'Image';
    icon: 'picture';
  };
  attributes: {
    image: Attribute.Component<'shared-component.image-2-device'>;
    title: Attribute.Component<'shared-component.title'>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentProject extends Schema.Component {
  collectionName: 'components_my_component_projects';
  info: {
    displayName: 'Project';
    icon: 'briefcase';
    description: '';
  };
  attributes: {
    section_layout: Attribute.Enumeration<['Container', 'Fullwidth']> &
      Attribute.Required;
    section_display: Attribute.Enumeration<
      [
        'Content 50% | Listing 50%',
        'Content 30% | Listing 70%',
        'Content 70% | Listing 30%'
      ]
    > &
      Attribute.Required;
    listing_style: Attribute.Enumeration<['Style 1', 'Style 2', 'Style 3']> &
      Attribute.Required;
    listing_switch_positions: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    listing_background: Attribute.Enumeration<
      [
        'Transparent background',
        'Light background',
        'Dark background',
        'Color background'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Transparent background'>;
    listing_background_color: Attribute.String;
    title: Attribute.Component<'shared-component.title'>;
    button: Attribute.Component<'shared-component.button'>;
    listing_content: Attribute.Component<'listing-component.extra', true>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentTeam extends Schema.Component {
  collectionName: 'components_my_component_teams';
  info: {
    displayName: 'Team';
    icon: 'grid';
  };
  attributes: {
    section_layout: Attribute.Enumeration<['Container', 'Fullwidth']> &
      Attribute.Required &
      Attribute.DefaultTo<'Container'>;
    listing_style: Attribute.Enumeration<['Style 1', 'Style 2', 'Style 3']> &
      Attribute.Required &
      Attribute.DefaultTo<'Style 1'>;
    listing_alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.Required &
      Attribute.DefaultTo<'Left'>;
    listing_column_desktop: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_column_mobile: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_slide_desktop: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    listing_slide_mobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    listing_space: Attribute.String;
    title: Attribute.Component<'shared-component.title'>;
    listing_content: Attribute.Component<
      'listing-component.card-no-link',
      true
    >;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentTestimonial extends Schema.Component {
  collectionName: 'components_my_component_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'user';
  };
  attributes: {
    listing_style: Attribute.Enumeration<['Style 1', 'Style 2', 'Style 3']> &
      Attribute.Required &
      Attribute.DefaultTo<'Style 1'>;
    listing_alignment: Attribute.Enumeration<['Left', 'Center', 'Right']> &
      Attribute.Required &
      Attribute.DefaultTo<'Left'>;
    listing_column_desktop: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_column_mobile: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    listing_slide_desktop: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    listing_slide_mobile: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    title: Attribute.Component<'shared-component.title'>;
    listing_content: Attribute.Component<
      'listing-component.card-no-link',
      true
    >;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface MyComponentVideo extends Schema.Component {
  collectionName: 'components_my_component_videos';
  info: {
    displayName: 'Video';
    icon: 'slideshow';
  };
  attributes: {
    video: Attribute.Component<'shared-component.video'>;
    title: Attribute.Component<'shared-component.title'>;
    section_setting: Attribute.Component<'shared-component.section-setting'>;
  };
}

export interface SharedComponentAlignment extends Schema.Component {
  collectionName: 'components_shared_component_alignments';
  info: {
    displayName: 'alignment';
    icon: 'layer';
    description: '';
  };
  attributes: {
    text_align_horizontal_desktop: Attribute.Enumeration<
      ['Left', 'Center', 'Right']
    > &
      Attribute.DefaultTo<'Left'>;
    text_align_horizontal_mobile: Attribute.Enumeration<
      ['Left', 'Center', 'Right']
    > &
      Attribute.DefaultTo<'Left'>;
  };
}

export interface SharedComponentBackendMenu extends Schema.Component {
  collectionName: 'components_shared_component_backend_menus';
  info: {
    displayName: 'backend-menu';
    icon: 'bulletList';
  };
  attributes: {
    name: Attribute.String;
    type: Attribute.Enumeration<['Collection', 'Single']> &
      Attribute.Required &
      Attribute.DefaultTo<'Collection'>;
  };
}

export interface SharedComponentBackground extends Schema.Component {
  collectionName: 'components_shared_component_backgrounds';
  info: {
    displayName: 'background';
    icon: 'brush';
    description: '';
  };
  attributes: {
    background_color: Attribute.String;
    background_image: Attribute.Component<'shared-component.image-2-device'>;
    background_repeat: Attribute.Enumeration<
      ['No repeat', 'Repeat all', 'Repeat X', 'Repeat Y']
    > &
      Attribute.Required;
    background_size: Attribute.Enumeration<['Cover', 'Contain', 'Auto']> &
      Attribute.Required;
    background_fixed: Attribute.Enumeration<['Static', 'Fixed']> &
      Attribute.Required;
    content_theme: Attribute.Enumeration<['Dark', 'Light']> &
      Attribute.Required;
    Common_background: Attribute.Enumeration<['Primary', 'Secondary']>;
  };
}

export interface SharedComponentBanner extends Schema.Component {
  collectionName: 'components_shared_component_banners';
  info: {
    displayName: 'banner';
    icon: 'picture';
  };
  attributes: {
    banner_name: Attribute.String;
    banner_type: Attribute.Enumeration<['Image', 'Video']> & Attribute.Required;
    image: Attribute.Component<'shared-component.image-2-device'>;
    video_setting: Attribute.Component<'shared-component.video'>;
    banner_content: Attribute.Component<'shared-component.nexitor'>;
    content_position_desktop: Attribute.Enumeration<
      [
        'Top - Left',
        'Top - Center',
        'Top - Right',
        'Middle - Left',
        'Middle - Center',
        'Middle - Right',
        'Bottom - Left',
        'Bottom - Center',
        'Bottom - Right'
      ]
    > &
      Attribute.Required;
    content_position_mobile: Attribute.Enumeration<
      [
        'Top - Left',
        'Top - Center',
        'Top - Right',
        'Middle - Left',
        'Middle - Center',
        'Middle - Right',
        'Bottom - Left',
        'Bottom - Center',
        'Bottom - Right'
      ]
    > &
      Attribute.Required;
  };
}

export interface SharedComponentButtonTheme extends Schema.Component {
  collectionName: 'components_shared_component_button_themes';
  info: {
    displayName: 'button-theme';
    icon: 'brush';
    description: '';
  };
  attributes: {
    button_style: Attribute.Enumeration<['Button', 'Text Link']> &
      Attribute.DefaultTo<'Button'>;
    button_theme: Attribute.Enumeration<
      ['Primary', 'Secondary', 'Third', 'Light', 'Dark', 'Disable']
    >;
    icon: Attribute.Enumeration<
      [
        'Arrow right',
        'Arrow left',
        'Account',
        'Link',
        'Calendar',
        'Download',
        'Document',
        'Email',
        'Folder',
        'Map marker',
        'Phone',
        'Tag'
      ]
    >;
    icon_position: Attribute.Enumeration<['Icon left', 'Icon right']>;
  };
}

export interface SharedComponentButton extends Schema.Component {
  collectionName: 'components_shared_component_buttons';
  info: {
    displayName: 'button';
    icon: 'link';
    description: '';
  };
  attributes: {
    button_style: Attribute.Component<'shared-component.button-theme'>;
    link: Attribute.Component<'shared-component.link'>;
    Button_name: Attribute.String;
  };
}

export interface SharedComponentButtons extends Schema.Component {
  collectionName: 'components_shared_component_buttons2';
  info: {
    displayName: 'buttons';
    icon: 'link';
  };
  attributes: {
    buttons: Attribute.Component<'shared-component.button', true>;
  };
}

export interface SharedComponentDimension extends Schema.Component {
  collectionName: 'components_shared_component_dimensions';
  info: {
    displayName: 'dimension';
    icon: 'expand';
  };
  attributes: {
    x_desktop: Attribute.String;
    y_desktop: Attribute.String;
    x_mobile: Attribute.String;
    y_mobile: Attribute.String;
  };
}

export interface SharedComponentEditor extends Schema.Component {
  collectionName: 'components_shared_component_editors';
  info: {
    displayName: 'editor';
    icon: 'file';
    description: '';
  };
  attributes: {
    ckeditor5: Attribute.RichText &
      Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'toolbar';
        }
      >;
  };
}

export interface SharedComponentFooter extends Schema.Component {
  collectionName: 'components_shared_component_footers';
  info: {
    displayName: 'footer';
    icon: 'file';
  };
  attributes: {
    footer: Attribute.RichText;
  };
}

export interface SharedComponentHeader extends Schema.Component {
  collectionName: 'components_shared_component_headers';
  info: {
    displayName: 'header';
    icon: 'file';
  };
  attributes: {
    header: Attribute.RichText;
  };
}

export interface SharedComponentImage2Device extends Schema.Component {
  collectionName: 'components_shared_component_image_2_devices';
  info: {
    displayName: 'image-2-device';
    icon: 'picture';
  };
  attributes: {
    image_d: Attribute.Media;
    image_m: Attribute.Media;
  };
}

export interface SharedComponentKeyword extends Schema.Component {
  collectionName: 'components_shared_component_keywords';
  info: {
    displayName: 'keyword';
    icon: 'bulletList';
  };
  attributes: {
    keyword: Attribute.String;
  };
}

export interface SharedComponentLink extends Schema.Component {
  collectionName: 'components_shared_component_links';
  info: {
    displayName: 'link';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link_url: Attribute.String;
    new_window: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedComponentListMenu extends Schema.Component {
  collectionName: 'components_shared_c_list_menus';
  info: {
    displayName: 'list-menu';
    icon: 'link';
    description: '';
  };
  attributes: {
    label: Attribute.String;
    link_type: Attribute.Enumeration<['Internal link', 'Custom link']>;
    internal_link: Attribute.Relation<
      'shared-component.list-menu',
      'oneToOne',
      'api::page.page'
    >;
    custom_link: Attribute.String;
    new_window: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface SharedComponentMenu1 extends Schema.Component {
  collectionName: 'components_shared_component_menu_1s';
  info: {
    displayName: 'menu-1';
    icon: 'bulletList';
  };
  attributes: {
    list_menu: Attribute.Component<'shared-component.list-menu'>;
    children_menu_2: Attribute.Component<'shared-component.menu-2', true>;
  };
}

export interface SharedComponentMenu2 extends Schema.Component {
  collectionName: 'components_shared_component_menu_2s';
  info: {
    displayName: 'menu-2';
    icon: 'bulletList';
  };
  attributes: {
    list_menu: Attribute.Component<'shared-component.list-menu'>;
    children_menu_3: Attribute.Component<'shared-component.menu-3', true>;
  };
}

export interface SharedComponentMenu3 extends Schema.Component {
  collectionName: 'components_shared_component_menu_3s';
  info: {
    displayName: 'menu-3';
    icon: 'bulletList';
  };
  attributes: {
    list_menu: Attribute.Component<'shared-component.list-menu'>;
  };
}

export interface SharedComponentMenu extends Schema.Component {
  collectionName: 'components_shared_component_menus';
  info: {
    displayName: 'menu';
    icon: 'bulletList';
  };
  attributes: {
    list_menu: Attribute.Component<'shared-component.list-menu'>;
    children_menu_1: Attribute.Component<'shared-component.menu-1', true>;
  };
}

export interface SharedComponentMenus extends Schema.Component {
  collectionName: 'components_shared_component_menus2';
  info: {
    displayName: 'menus';
    icon: 'bulletList';
  };
  attributes: {
    menus: Attribute.Component<'shared-component.menu', true>;
  };
}

export interface SharedComponentNexitor extends Schema.Component {
  collectionName: 'components_shared_component_nexitors';
  info: {
    displayName: 'nexitor';
    icon: 'layout';
    description: '';
  };
  attributes: {
    title: Attribute.Component<'shared-component.title'>;
    editor: Attribute.Component<'shared-component.editor'>;
    buttons: Attribute.Component<'shared-component.buttons'>;
    alignment: Attribute.Component<'shared-component.alignment'>;
  };
}

export interface SharedComponentPaddingSet extends Schema.Component {
  collectionName: 'components_shared_component_padding_sets';
  info: {
    displayName: 'padding-set';
    icon: 'layout';
    description: '';
  };
  attributes: {
    padding_top_d: Attribute.String;
    padding_right_d: Attribute.String;
    padding_bottom_d: Attribute.String;
    padding_left_d: Attribute.String;
    padding_top_m: Attribute.String;
    padding_right_m: Attribute.String;
    padding_bottom_m: Attribute.String;
    padding_left_m: Attribute.String;
  };
}

export interface SharedComponentRadius extends Schema.Component {
  collectionName: 'components_shared_component_radii';
  info: {
    displayName: 'Radius';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    radius_default: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    radius_card: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
    radius_button: Attribute.Decimal &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 10;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

export interface SharedComponentSectionSetting extends Schema.Component {
  collectionName: 'components_shared_component_sec_settings';
  info: {
    displayName: 'section-setting';
    icon: 'cog';
  };
  attributes: {
    background: Attribute.Component<'shared-component.background'>;
    padding_set: Attribute.Component<'shared-component.padding-set'>;
    custom_css: Attribute.Component<'shared-component.editor'>;
  };
}

export interface SharedComponentSeo extends Schema.Component {
  collectionName: 'components_shared_component_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    page_title: Attribute.String;
    meta_title: Attribute.String;
    meta_description: Attribute.Text;
    meta_keywords: Attribute.Text;
    share_image: Attribute.Media;
  };
}

export interface SharedComponentSlug extends Schema.Component {
  collectionName: 'components_shared_component_slugs';
  info: {
    displayName: 'slug';
    icon: 'strikeThrough';
  };
  attributes: {
    slug: Attribute.String;
  };
}

export interface SharedComponentSocial extends Schema.Component {
  collectionName: 'components_shared_component_socials';
  info: {
    displayName: 'social';
    icon: 'earth';
    description: '';
  };
  attributes: {
    link: Attribute.String;
    name: Attribute.String;
    social: Attribute.Enumeration<
      ['Facebook', 'Twitter', 'X', 'Youtube', 'Instagram', 'Line', 'Linkedin']
    >;
  };
}

export interface SharedComponentTextTheme extends Schema.Component {
  collectionName: 'components_shared_component_text_themes';
  info: {
    displayName: 'text-theme';
    icon: 'brush';
    description: '';
  };
  attributes: {
    theme_name: Attribute.String;
    color_default_text: Attribute.String;
    color_hover_text: Attribute.String;
  };
}

export interface SharedComponentTheme extends Schema.Component {
  collectionName: 'components_shared_component_themes';
  info: {
    displayName: 'theme';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    color: Attribute.Enumeration<['Primary', 'Secondary', 'Third']> &
      Attribute.Required &
      Attribute.DefaultTo<'Primary'>;
  };
}

export interface SharedComponentTitle extends Schema.Component {
  collectionName: 'components_shared_component_titles';
  info: {
    displayName: 'title';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    tag: Attribute.Enumeration<['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']> &
      Attribute.Required &
      Attribute.DefaultTo<'h1'>;
    size: Attribute.Enumeration<
      [
        'Heading 1',
        'Heading 2',
        'Heading 3',
        'Heading 4',
        'Heading 5',
        'Heading 6',
        'Paragraph'
      ]
    > &
      Attribute.Required &
      Attribute.DefaultTo<'Heading 1'>;
    sub_title: Attribute.Text;
    alignment: Attribute.Component<'shared-component.alignment'>;
    freeform_title: Attribute.Component<'shared-component.editor'>;
    pre_title: Attribute.String;
  };
}

export interface SharedComponentVideo extends Schema.Component {
  collectionName: 'components_shared_component_videos';
  info: {
    displayName: 'video';
    icon: 'slideshow';
    description: '';
  };
  attributes: {
    video_type: Attribute.Enumeration<['Youtube', 'Upload file (Mp4)']> &
      Attribute.Required &
      Attribute.DefaultTo<'Youtube'>;
    youtube_id: Attribute.String;
    upload_file_mp4: Attribute.Media;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
    page_title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'form-component.captcha': FormComponentCaptcha;
      'form-component.checkbox-item': FormComponentCheckboxItem;
      'form-component.checkbox': FormComponentCheckbox;
      'form-component.consent': FormComponentConsent;
      'form-component.field-setting': FormComponentFieldSetting;
      'form-component.input': FormComponentInput;
      'form-component.radio-item': FormComponentRadioItem;
      'form-component.radio': FormComponentRadio;
      'form-component.textarea': FormComponentTextarea;
      'listing-component.card-no-link': ListingComponentCardNoLink;
      'listing-component.card': ListingComponentCard;
      'listing-component.content': ListingComponentContent;
      'listing-component.extra': ListingComponentExtra;
      'listing-component.image': ListingComponentImage;
      'listing-component.text': ListingComponentText;
      'my-component.about': MyComponentAbout;
      'my-component.banners': MyComponentBanners;
      'my-component.call-to-action': MyComponentCallToAction;
      'my-component.client': MyComponentClient;
      'my-component.content-with-image': MyComponentContentWithImage;
      'my-component.content': MyComponentContent;
      'my-component.faqs': MyComponentFaqs;
      'my-component.feature-icon': MyComponentFeatureIcon;
      'my-component.feature-image': MyComponentFeatureImage;
      'my-component.feature-list': MyComponentFeatureList;
      'my-component.image': MyComponentImage;
      'my-component.project': MyComponentProject;
      'my-component.team': MyComponentTeam;
      'my-component.testimonial': MyComponentTestimonial;
      'my-component.video': MyComponentVideo;
      'shared-component.alignment': SharedComponentAlignment;
      'shared-component.backend-menu': SharedComponentBackendMenu;
      'shared-component.background': SharedComponentBackground;
      'shared-component.banner': SharedComponentBanner;
      'shared-component.button-theme': SharedComponentButtonTheme;
      'shared-component.button': SharedComponentButton;
      'shared-component.buttons': SharedComponentButtons;
      'shared-component.dimension': SharedComponentDimension;
      'shared-component.editor': SharedComponentEditor;
      'shared-component.footer': SharedComponentFooter;
      'shared-component.header': SharedComponentHeader;
      'shared-component.image-2-device': SharedComponentImage2Device;
      'shared-component.keyword': SharedComponentKeyword;
      'shared-component.link': SharedComponentLink;
      'shared-component.list-menu': SharedComponentListMenu;
      'shared-component.menu-1': SharedComponentMenu1;
      'shared-component.menu-2': SharedComponentMenu2;
      'shared-component.menu-3': SharedComponentMenu3;
      'shared-component.menu': SharedComponentMenu;
      'shared-component.menus': SharedComponentMenus;
      'shared-component.nexitor': SharedComponentNexitor;
      'shared-component.padding-set': SharedComponentPaddingSet;
      'shared-component.radius': SharedComponentRadius;
      'shared-component.section-setting': SharedComponentSectionSetting;
      'shared-component.seo': SharedComponentSeo;
      'shared-component.slug': SharedComponentSlug;
      'shared-component.social': SharedComponentSocial;
      'shared-component.text-theme': SharedComponentTextTheme;
      'shared-component.theme': SharedComponentTheme;
      'shared-component.title': SharedComponentTitle;
      'shared-component.video': SharedComponentVideo;
      'shared.meta-social': SharedMetaSocial;
      'shared.seo': SharedSeo;
    }
  }
}
