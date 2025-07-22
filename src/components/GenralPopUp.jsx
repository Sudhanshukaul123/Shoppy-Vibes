import { useState } from "react"
import { X, Upload, Heart, Sparkles, DollarSign, User } from "lucide-react"

const GneralPopUs = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    jewelryType: "",
    occasion: "",
    budget: "",
    timeline: "",
    description: "",
    inspiration: "",
  })

  const [uploadedFiles, setUploadedFiles] = useState([])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files)
    setUploadedFiles([...uploadedFiles, ...files])
  }

  const removeFile = (index) => {
    setUploadedFiles(uploadedFiles.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Custom design request:", formData, uploadedFiles)
    // Show success message and close popup
    alert("Thank you! We'll contact you within 24 hours to discuss your custom design.")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-white/80 backdrop-blur-xs z-50 flex items-center justify-center p-4">
      <div className="bg-cream rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-dark-brown/10 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-cream border-b border-dark-brown/10 p-6 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-dark-brown">Request Custom Design</h2>
            <p className="text-dark-brown/70 mt-1">Let's create something uniquely yours</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-dark-brown/10 rounded-full transition-colors duration-200">
            <X className="w-6 h-6 text-dark-brown" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-dark-brown mb-4 flex items-center">
              <User className="w-5 h-5 mr-2" />
              Contact Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-dark-brown mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>
          </div>

          {/* Design Details */}
          <div>
            <h3 className="text-xl font-bold text-dark-brown mb-4 flex items-center">
              <Sparkles className="w-5 h-5 mr-2" />
              Design Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="jewelryType" className="block text-sm font-medium text-dark-brown mb-2">
                  Type of Jewelry *
                </label>
                <select
                  id="jewelryType"
                  name="jewelryType"
                  required
                  value={formData.jewelryType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200"
                >
                  <option value="">Select jewelry type</option>
                  <option value="engagement-ring">Engagement Ring</option>
                  <option value="wedding-band">Wedding Band</option>
                  <option value="necklace">Necklace</option>
                  <option value="earrings">Earrings</option>
                  <option value="bracelet">Bracelet</option>
                  <option value="pendant">Pendant</option>
                  <option value="brooch">Brooch</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-dark-brown mb-2">
                  Occasion/Purpose
                </label>
                <select
                  id="occasion"
                  name="occasion"
                  value={formData.occasion}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200"
                >
                  <option value="">Select occasion</option>
                  <option value="engagement">Engagement</option>
                  <option value="wedding">Wedding</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="birthday">Birthday</option>
                  <option value="graduation">Graduation</option>
                  <option value="gift">Gift</option>
                  <option value="personal">Personal Collection</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>

          {/* Budget and Timeline */}
          <div>
            <h3 className="text-xl font-bold text-dark-brown mb-4 flex items-center">
              <DollarSign className="w-5 h-5 mr-2" />
              Budget & Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-dark-brown mb-2">
                  Budget Range *
                </label>
                <select
                  id="budget"
                  name="budget"
                  required
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200"
                >
                  <option value="">Select budget range</option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2500">$1,000 - $2,500</option>
                  <option value="2500-5000">$2,500 - $5,000</option>
                  <option value="5000-10000">$5,000 - $10,000</option>
                  <option value="over-10000">Over $10,000</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <div>
                <label htmlFor="timeline" className="block text-sm font-medium text-dark-brown mb-2">
                  When do you need it? *
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  required
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200"
                >
                  <option value="">Select timeline</option>
                  <option value="rush-1-week">Rush (1 week) - Additional fees apply</option>
                  <option value="2-3-weeks">2-3 weeks</option>
                  <option value="1-month">1 month</option>
                  <option value="2-months">2 months</option>
                  <option value="3-months">3+ months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>
          </div>

          {/* Design Description */}
          <div>
            <h3 className="text-xl font-bold text-dark-brown mb-4 flex items-center">
              <Heart className="w-5 h-5 mr-2" />
              Your Vision
            </h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-dark-brown mb-2">
                  Describe your dream piece *
                </label>
                <textarea
                  id="description"
                  name="description"
                  required
                  rows={4}
                  value={formData.description}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200 resize-none"
                  placeholder="Tell us about your vision... What style do you love? Any specific gemstones? What makes this piece special to you?"
                />
              </div>

              <div>
                <label htmlFor="inspiration" className="block text-sm font-medium text-dark-brown mb-2">
                  Inspiration & References
                </label>
                <textarea
                  id="inspiration"
                  name="inspiration"
                  rows={3}
                  value={formData.inspiration}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-dark-brown/20 rounded-lg bg-white text-dark-brown placeholder-dark-brown/50 focus:outline-none focus:ring-2 focus:ring-dark-brown/20 focus:border-dark-brown/30 transition-colors duration-200 resize-none"
                  placeholder="Any specific styles, designers, or pieces that inspire you? Pinterest links, celebrity jewelry, family heirlooms..."
                />
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <h3 className="text-xl font-bold text-dark-brown mb-4 flex items-center">
              <Upload className="w-5 h-5 mr-2" />
              Upload Inspiration Images
            </h3>
            <div className="border-2 border-dashed border-dark-brown/20 rounded-lg p-6 text-center hover:border-dark-brown/40 transition-colors duration-200">
              <input
                type="file"
                id="fileUpload"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
              <label htmlFor="fileUpload" className="cursor-pointer">
                <Upload className="w-12 h-12 text-dark-brown/40 mx-auto mb-4" />
                <p className="text-dark-brown font-medium mb-2">Click to upload images</p>
                <p className="text-dark-brown/60 text-sm">
                  Upload photos of jewelry you love, sketches, or inspiration images
                </p>
                <p className="text-dark-brown/50 text-xs mt-2">PNG, JPG up to 10MB each</p>
              </label>
            </div>

            {/* Uploaded Files */}
            {uploadedFiles.length > 0 && (
              <div className="mt-4">
                <p className="text-sm font-medium text-dark-brown mb-2">Uploaded Files:</p>
                <div className="space-y-2">
                  {uploadedFiles.map((file, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between bg-white p-3 rounded-lg border border-dark-brown/10"
                    >
                      <span className="text-dark-brown text-sm truncate">{file.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700 transition-colors duration-200"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Process Information */}
          <div className="bg-white rounded-xl p-6 border border-dark-brown/10">
            <h3 className="text-lg font-bold text-dark-brown mb-4">What Happens Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-10 h-10 bg-dark-brown/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-dark-brown">1</span>
                </div>
                <p className="text-dark-brown font-medium text-sm">Consultation Call</p>
                <p className="text-dark-brown/60 text-xs">Within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-dark-brown/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-dark-brown">2</span>
                </div>
                <p className="text-dark-brown font-medium text-sm">Design & Quote</p>
                <p className="text-dark-brown/60 text-xs">3-5 business days</p>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 bg-dark-brown/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-sm font-bold text-dark-brown">3</span>
                </div>
                <p className="text-dark-brown font-medium text-sm">Crafting Begins</p>
                <p className="text-dark-brown/60 text-xs">After approval</p>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-6 border-t border-dark-brown/10">
            <p className="text-dark-brown/60 text-sm">
              By submitting, you agree to our consultation process and privacy policy.
            </p>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-3 border-2 border-dark-brown/20 text-dark-brown rounded-lg font-semibold hover:bg-dark-brown/5 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-dark-brown text-cream px-8 py-3 rounded-lg font-semibold hover:bg-dark-brown/90 transition-colors duration-200 inline-flex items-center space-x-2 group"
              >
                <Heart className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span>Submit Request</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default GneralPopUs
