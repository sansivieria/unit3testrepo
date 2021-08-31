const Locust = require('../models/cicada')
const Help = require('../models/help');
const router = require('express').Router();


// Create
router.post('/', async(req, res) => {
  try{
    const createdLocust = await Locust.create(req.body)
    res.status(200).json(createdLocust)
  }catch(error){
    console.error(error)
    res.status(400).json({ message: error.message })
  }
})


// read
router.get('/', async (req, res) => {
  try{
    const foundLocusts = await Locust.find({})
    res.status(200).json(foundLocusts)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message });
  }
})
// show
router.get('/:id', async (req, res) => {
  try{
    const foundLocust = await Locust.findById(req.params.id)
    res.status(200).json(foundLocust)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message });
  }
})

// update
router.put('/:id', async (req, res) => {
  try {
    const updatedLocust = await Locust.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.status(200).json(updatedLocust)
  }catch(error){
    console.error(error);
    res.status(400).json({ message: error.message })
  }
})

// help question/query
router.put('/:id/request', (req, res) => {
    //store the query
  const createHelpQuery = Help.create(req.body)

    // actually run query
  createHelpQuery.exec((err, createdQuestion) => {
    if (err){
      console.error(err);
      res.status(400).json({ message: err.message});
    } else {
      const updateLocustQuery = Locust.findByIdAndUpdate(req.params.id, { $addToSet: { comments: createdQuestion._id }}, { new: true })

        // actually run it
      updateLocustQuery.exec((err, updatedLocust) => {
          if(err){
            console.error(err);
            res.status(400).json({ message: err.message })
          } else {
            res.status(200).json(createdQuestion)
            }
      })
    }
  })
})

// delete
router.delete('/:id', async (req, res) => {
  try{
    const deletedBlog = await Locust.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLocust);
  } catch(error){
    console.error(error);
    res.status(400).json({ message: error.message})
  }
})

module.exports = router;
