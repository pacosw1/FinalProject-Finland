export function getData() {
  const itemList = [
    //hard-coded test data

    {
      id: "h11jbbj21",
      status: "unread",
      name: "Luke",
      profit: 50,
      complexity: "Easy",
      estimatedT: "1 week",
      testDetail: "Should display in content view",
      parts: [
        {
          id: "234234",
          material: "aluminum",
          picture: "url/",
          dimensions: {
            length: 10,
            width: 20,
            thickness: 30
          },
          features: [
            {
              id: "234234",
              name: "hole",
              quantity: 10,
              time: 20
            }
          ]
        },
        {
          id: "9342f",
          material: "Null",
          picture: "url/",
          dimensions: {
            length: 10,
            width: 20,
            thickness: 30
          },
          features: [
            {
              id: "54674",
              name: "Hey",
              quantity: 10,
              time: 20
            }
          ]
        }
      ]
    },
    {
      id: "h12jbbj2L",
      status: "unread",
      profit: 90,
      name: "Matthew",
      complexity: "E",
      estimatedT: "1",
      testDetail: "Should display in content view",
      parts: [
        {
          id: "213246",
          material: "aluminum",
          picture: "url/",
          dimensions: {
            length: 10,
            width: 20,
            thickness: 30
          },
          features: [
            {
              id: "345456",
              name: "hole",
              quantity: 10,
              time: 20
            }
          ]
        }
      ]
    },
    {
      id: "Mm12323",
      status: "unread",
      name: "John",
      profit: 20,
      complexity: "E",
      estimatedT: "1",
      testDetail: "Should display in content view",
      parts: [
        {
          id: "ff412",
          material: "notALuminum",
          picture: "url/",
          dimensions: {
            length: 10,
            width: 2,
            thickness: 30
          },
          features: [
            {
              id: "76543421",
              name: "xd",
              quantity: 2.5,
              time: 2
            }
          ]
        },
        {
          id: "9342f",
          material: "Null",
          picture: "url/",
          dimensions: {
            length: 10,
            width: 20,
            thickness: 30
          },
          features: [
            {
              id: "877654",
              name: "Hey",
              quantity: 10,
              time: 20
            }
          ]
        }
      ]
    },
    {
      id: "h12jbb3",
      status: "unread",
      name: "Robert",
      profit: 100,
      complexity: "E",
      estimatedT: "1",
      testDetail: "Should display in content view",
      parts: [
        {
          id: "9342f",
          material: "Null",
          picture: "url/",
          dimensions: {
            length: 10,
            width: 20,
            thickness: 30
          },
          features: [
            {
              id: "1111123",
              name: "Hey",
              quantity: 10,
              time: 20
            }
          ]
        },
        {
          id: "ewe",
          material: "Xd",
          picture: "url/",
          dimensions: {
            length: 10,
            width: 20,
            thickness: 30
          },
          features: [
            {
              id: "",
              name: "Hey",
              quantity: 10,
              time: 20
            }
          ]
        }
      ]
    }
  ];
  return itemList;
}
