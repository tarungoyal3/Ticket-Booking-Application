const { db } = require('./admin');

const findAndRemoveDuplicates = async () => {
  const showsRef = db.collection('shows');
  const showsSnapshot = await showsRef.get();

  for (const showDoc of showsSnapshot.docs) {
    const showRef = showDoc.ref;
    const seatsRef = showRef.collection('seats');
    const seatsSnapshot = await seatsRef.get();

    const seatsMap = {};

    for (const seatDoc of seatsSnapshot.docs) {
      const seatData = seatDoc.data();
      const seatKey = `${seatData.row}${seatData.number}`;

      if (seatsMap[seatKey]) {
        // Duplicate seat found, delete it
        console.log(`Deleting duplicate seat: ${seatKey}`);
        await seatDoc.ref.delete();
      } else {
        // Add seat to map
        seatsMap[seatKey] = seatDoc.id;
      }
    }
  }

  console.log('Duplicate removal complete.');
};

findAndRemoveDuplicates().catch(console.error);
