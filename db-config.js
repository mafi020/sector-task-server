const mongoose = require('mongoose');
const Sector = require('./models/sectors'); // Import the Sector model

exports.connectDB = () =>
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(async () => {
      const sectors = [
        'Manufacturing',
        'Construction materials',
        'Electronics and Optics',
        'Food and Beverage',
        'Bakery & confectionery products',
        'Beverages',
        'Fish & fish products ',
        'Meat & meat products',
        'Milk & dairy products ',
        'Other',
        'Sweets & snack food',
        'Furniture',
        'Bathroom/sauna ',
        'Bedroom',
        'Children’s room ',
        'Kitchen ',
        'Living room ',
        'Office',
        'Other (Furniture)',
        'Outdoor ',
        'Project furniture',
        'Machinery',
        'Machinery components',
        'Machinery equipment/tools',
        'Manufacture of machinery ',
        'Maritime',
        'Aluminium and steel workboats ',
        'Boat/Yacht building',
        'Ship repair and conversion',
        'Metal structures',
        'Repair and maintenance service',
        'Metalworking',
        'Construction of metal structures',
        'Houses and buildings',
        'Metal products',
        'Metal works',
        'CNC-machining',
        'Forgings, Fasteners ',
        'Gas, Plasma, Laser cutting',
        'MIG, TIG, Aluminum welding',
        'Plastic and Rubber',
        'Packaging',
        'Plastic goods',
        'Plastic processing technology',
        'Blowing',
        'Moulding',
        'Plastics welding and processing',
        'Plastic profiles',
        'Printing ',
        'Advertising',
        'Book/Periodicals printing',
        'Labelling and packaging printing',
        'Textile and Clothing',
        'Clothing',
        'Textile',
        'Wood',
        'Other (Wood)',
        'Wooden building materials',
        'Wooden houses',
        'Creative industries',
        'Energy technology',
        'Environment',
        'Service',
        'Business services',
        'Engineering',
        'Information Technology and Telecommunications',
        'Data processing, Web portals, E-marketing',
        'Programming, Consultancy',
        'Software, Hardware',
        'Telecommunications',
        'Tourism',
        'Translation services',
        'Transport and Logistics',
        'Air',
        'Rail',
        'Road',
        'Water',
      ];

      try {
        // for (const name of sectors) {
        //   const existingSector = await Sector.findOne({ name });
        //   if (!existingSector) {
        //     await Sector.create({ name });
        //   }
        // }

        console.log('Seeding completed');
      } catch (error) {
        console.error('Error seeding:', error.message);
      } finally {
        // mongoose.disconnect();
      }
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
