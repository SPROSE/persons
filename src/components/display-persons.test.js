import React from 'react';
import { render } from '@testing-library/react';
import PersonsData from './display-persons';
import { shallow } from "enzyme/build/index";

const initialProps = {
    personsData: [],
    personsDetailsData: []
};

describe('<PersonsData /> with no data renders component', () => {
    const container = shallow(<PersonsData {...initialProps} />);
    it('should match the snapshot without data', () => {
        expect(container.html()).toMatchSnapshot();
    });
});

const newProps = {
    personsData: [{"ID":0,"Name":"Paula Wilson"},{"ID":1,"Name":"Jose Pavarotti"},{"ID":2,"Name":"Art Braunschweiger"},{"@odata.type":"#ODataDemo.Customer","ID":3,"Name":"Liz Nixon","TotalExpense":99.99},{"@odata.type":"#ODataDemo.Customer","ID":4,"Name":"Liu Wong","TotalExpense":199.99},{"@odata.type":"#ODataDemo.Employee","ID":5,"Name":"Jaime Yorres","EmployeeID":10001,"HireDate":"2000-05-30T00:00:00Z","Salary":15000},{"@odata.type":"#ODataDemo.Employee","ID":6,"Name":"Fran Wilson","EmployeeID":10002,"HireDate":"2001-01-02T00:00:00Z","Salary":12000}],
    personsDetailsData: [{"PersonID":0,"Age":21,"Gender":false,"Phone":"(505) 555-5939","Address":{"Street":"2817 Milton Dr.","City":"Albuquerque","State":"NM","ZipCode":"87110","Country":"USA"},"Photo@odata.mediaEtag":"\"nCP1Tf4Uax96eYIWjvoC/6ZflG8=\""},{"PersonID":1,"Age":24,"Gender":true,"Phone":"(208) 555-8097","Address":{"Street":"187 Suffolk Ln.","City":"Boise","State":"ID","ZipCode":"83720","Country":"USA"}},{"PersonID":2,"Age":23,"Gender":true,"Phone":"(307) 555-4680","Address":{"Street":"P.O. Box 555","City":"Lander","State":"WY","ZipCode":"82520","Country":"USA"},"Photo@odata.mediaEtag":"\"98Cx1cCHP48mKHVeCPOsOMD+VxM=\""},{"PersonID":3,"Age":30,"Gender":true,"Phone":"(503) 555-3612","Address":{"Street":"89 Jefferson Way Suite 2","City":"Portland","State":"OR","ZipCode":"97201","Country":"USA"}},{"PersonID":4,"Age":40,"Gender":true,"Phone":"(406) 555-5834","Address":{"Street":"55 Grizzly Peak Rd.","City":"Butte","State":"MT","ZipCode":"59801","Country":"USA"},"Photo@odata.mediaEtag":"\"2kep1GGuKVXHNOwmDCBPt+KfMfQ=\""},{"PersonID":5,"Age":30,"Gender":true,"Phone":"(415) 555-5938","Address":{"Street":"87 Polk St. Suite 5","City":"San Francisco","State":"CA","ZipCode":"94117","Country":"USA"}},{"PersonID":6,"Age":28,"Gender":false,"Phone":"(503) 555-9573","Address":{"Street":"89 Chiaroscuro Rd.","City":"Portland","State":"OR","ZipCode":"97219","Country":"USA"},"Photo@odata.mediaEtag":"\"i35xP3MMTMT8X3COzBD8FWIECnQ=\""}]
};

describe('<PersonsData /> with data renders component', () => {
    const container = shallow(<PersonsData {...newProps} />);
    it('should match the snapshot with data', () => {
        expect(container.html()).toMatchSnapshot();
    });
});