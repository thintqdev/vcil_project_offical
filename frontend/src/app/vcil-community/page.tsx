import FrontDefaultLayout from "@/components/Layouts/FrontDefaultLayout";
import AboutUs from "@/components/VCIL/AboutUs";
import ContactUs from "@/components/VCIL/ContactUs";
import CoreTeam from "@/components/VCIL/CoreTeam";
import GetInvolve from "@/components/VCIL/GetInvolve";
import Mission from "@/components/VCIL/Mission";
import OurDream from "@/components/VCIL/OurDream";
import People from "@/components/VCIL/People";
import QuestionAnswer from "@/components/VCIL/QuestionAnswer";
import Strategy from "@/components/VCIL/Strategy";
import Volunteer from "@/components/VCIL/Volunteer";

export default function VcilPage() {
  return (
    <FrontDefaultLayout>
      <AboutUs />
      <Mission />
      <Strategy />
      <Volunteer />
      <People />
      <CoreTeam />
      <OurDream />
      <QuestionAnswer />
      <GetInvolve />
      <ContactUs />
    </FrontDefaultLayout>
  );
}
