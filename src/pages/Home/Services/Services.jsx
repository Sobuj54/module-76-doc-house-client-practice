import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const Services = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="grid lg:grid-cols-2 mt-20 px-10">
      <div>
        <img
          src="https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg"
          alt=""
        />
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-2">Our Services</h2>
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
          <TabPanel>adfsaf</TabPanel>
          <TabPanel>sofj</TabPanel>
          <TabPanel>third</TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Services;
