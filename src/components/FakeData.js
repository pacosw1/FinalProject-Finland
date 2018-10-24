export function getData() {
  const itemList = [
    //hard-coded test data
    {
      id: "h11jbbj21",
      name: "Luke",
      complexity: "E",
      estimatedT: "1",
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
      name: "John",
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
              name: "xd",
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
      name: "Robert",
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
