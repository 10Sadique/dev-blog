import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: 'Moonshine',
    });
  } catch (error) {
    throw new Error('Conncetion failed!');
  }
};

export default connect;
