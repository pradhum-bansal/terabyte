import Testimonial from './assets/images/testimonial.svg';
import Testimonial1 from './assets/images/testimonial1.svg';
import Testimonial2 from './assets/images/testimonial2.svg';
export const SelectCustomStyles = {
  control: (base, state) => ({
    ...base,
    "&:hover": {
      border: "none",
      boxShadow: "none",
      borderBottom: '2px solid',
      // backgroundColor: "#fcfcfd",
    },
    "&:active": {
      border: "none",
      boxShadow: "none",
      borderBottom: '2px solid',
      backgroundColor: "#fff",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
      borderBottom: '2px solid',
      backgroundColor: "#fff",
    },
    "&:disabled": {
      backgroundColor: "#e9ecef",
    },
    // height: 44,
    // minHeight: 44,
    maxWidth: "auto",
    // backgroundColor: '#fafafa',
    borderRadius: "0px",
    fontSize: "14px",
    fontWeight: "normal",
    color: "#667085",
    border: 'none',
    borderBottom: '2px solid',
    boxShadow: state.isFocused ? "none" : "none",
    cursor: state.isDisabled ? "not-allowed !important" : "pointer !important",
    pointerEvents: "auto !important",
  }),
  menu: (base) => ({
    ...base,
    fontSize: "14px",
    fontWeight: "normal",
    padding: "4px",
    color: "#667085",
    border: "solid 1px #7143f1",
    boxShadow: "none",
    backgroundColor: "#fff",
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isDisabled
      ? null
      : isSelected
      ? "rgba(111, 8, 241, 0.1)"
      : isFocused
      ? "rgba(111, 8, 241, 0.1)"
      : null,
    color: isDisabled
      ? null
      : isSelected
      ? "#1a1722"
      : isFocused
      ? "#1a1722"
      : null,
    cursor: "pointer !important",
    marginBottom: "4px",
  }),
};


export const TestimonialCards = [
  {
    image1: Testimonial,
    image2: Testimonial1,
    image3: Testimonial2,
    description:
      " Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    author: "Carolyn Willms",
    designation: "Global Accountability Officer",
  },
  {
    image1: Testimonial1,
    image2: Testimonial2,
    image3: Testimonial,
    description:
      " Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    author: "Carolyn Willms",
    designation: "Global Accountability Officer",
  },
  {
    image1: Testimonial2,
    image2: Testimonial,
    image3: Testimonial1,
    description:
      " Lorem ipsum dolor sit amet consectetur. Massa sed dapibus adipiscing felis at. Integer at dictum ullamcorper magna nam eget. Elementum semper ultrices quam elementum dignissim etiam velit molestie diam. Netus arcu varius lectus dignissim mollis lorem pulvinar tortor arcu.",
    author: "Carolyn Willms",
    designation: "Global Accountability Officer",
  },
];