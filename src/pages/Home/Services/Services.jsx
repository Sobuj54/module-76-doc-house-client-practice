import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ServiceDetails from "./serviceDetailas/ServiceDetails";

const Services = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);

  let cavity = services.find(
    (service) => service.title === "Cavity Protection"
  );

  let cosmetic = services.find(
    (service) => service.title === "Cosmetic Dentistry"
  );
  let surgery = services.find((service) => service.title === "Oral Surgery");

  return (
    <div className="grid lg:grid-cols-2 gap-5 mt-20 px-5 lg:px-10">
      <div>
        <img
          src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-4xl font-bold mb-3">Our Services</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inve ntore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        {/* react tab */}
        <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className="mt-7">
          <TabList className="tabs tabs-boxed">
            <Tab className={`tab ${tabIndex == 0 ? "tab-active" : ""}`}>
              Cavity Protection
            </Tab>
            <Tab className={`tab ${tabIndex == 1 ? "tab-active" : ""}`}>
              Cosmetic Dentisty
            </Tab>
            <Tab className={`tab ${tabIndex == 2 ? "tab-active" : ""}`}>
              Oral Surgery
            </Tab>
          </TabList>
          <TabPanel>
            {/* <ServiceDetails service={cavity}></ServiceDetails> */}
          </TabPanel>
          <TabPanel>
            {/* <ServiceDetails service={cosmetic}></ServiceDetails> */}
          </TabPanel>
          <TabPanel>
            {/* <ServiceDetails service={surgery}></ServiceDetails> */}
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
