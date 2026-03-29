import { Heart, CreditCard, Banknote, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const DonateNow = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [customAmount, setCustomAmount] = useState('')
  const [donorType, setDonorType] = useState('individual')

  const donationAmounts = [500, 1000, 2500, 5000, 10000]

  const handleDonate = () => {
    const amount = selectedAmount || customAmount
    if (!amount) {
      alert('Please select or enter a donation amount')
      return
    }
    alert(`Thank you for your generous donation of ₹${amount}! You will be redirected to payment gateway.`)
  }

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] overflow-hidden">
        <img
          src="/images/16-768x432.jpg"
          alt="Donate Now"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-3xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Donate Now</h1>
            <p className="text-lg md:text-xl">Your Support Can Change Lives</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Donation Form */}
            <div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="text-center mb-8">
                  <Heart className="w-16 h-16 text-orange-500 mx-auto mb-4 fill-orange-200" />
                  <h2 className="text-3xl font-bold text-gray-800">Make a Donation</h2>
                  <p className="text-gray-600 mt-2">Your contribution helps us create lasting change</p>
                </div>

                {/* Donor Type */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">I am donating as:</label>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setDonorType('individual')}
                      className={`flex-1 py-2 px-4 rounded-lg border transition ${
                        donorType === 'individual'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-gray-300 text-gray-600 hover:border-orange-500'
                      }`}
                    >
                      Individual
                    </button>
                    <button
                      onClick={() => setDonorType('corporate')}
                      className={`flex-1 py-2 px-4 rounded-lg border transition ${
                        donorType === 'corporate'
                          ? 'bg-orange-500 text-white border-orange-500'
                          : 'border-gray-300 text-gray-600 hover:border-orange-500'
                      }`}
                    >
                      Corporate
                    </button>
                  </div>
                </div>

                {/* Donation Amount */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">Select Donation Amount (₹)</label>
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    {donationAmounts.map((amount) => (
                      <button
                        key={amount}
                        onClick={() => {
                          setSelectedAmount(amount)
                          setCustomAmount('')
                        }}
                        className={`py-2 px-3 rounded-lg border transition ${
                          selectedAmount === amount
                            ? 'bg-orange-500 text-white border-orange-500'
                            : 'border-gray-300 text-gray-600 hover:border-orange-500'
                        }`}
                      >
                        ₹{amount}
                      </button>
                    ))}
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Or enter custom amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value)
                        setSelectedAmount(null)
                      }}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Donor Details */}
                <div className="space-y-4 mb-6">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    placeholder="Address (Optional)"
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-3">Payment Method</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="flex items-center justify-center gap-2 py-2 px-4 border rounded-lg hover:border-orange-500 transition">
                      <CreditCard className="w-5 h-5" />
                      <span>Card</span>
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2 px-4 border rounded-lg hover:border-orange-500 transition">
                      <Banknote className="w-5 h-5" />
                      <span>UPI</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleDonate}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Heart className="w-5 h-5 fill-white" />
                  Donate Now
                </button>

                <p className="text-xs text-gray-500 text-center mt-4">
                  Your donation is 80G tax exempt under Income Tax Act, 1961
                </p>
              </div>
            </div>

            {/* Right Column - Impact Information */}
            <div>
              <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Your Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">₹500</h4>
                      <p className="text-gray-600">Provides educational materials for one child for 3 months</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">₹2,500</h4>
                      <p className="text-gray-600">Supports a health camp for 50 women</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">₹5,000</h4>
                      <p className="text-gray-600">Sponsors skill development training for 10 youth</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-800">₹10,000</h4>
                      <p className="text-gray-600">Supports Anganwadi operations for 3 months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Bank Transfer Details</h3>
                <div className="space-y-3 text-gray-600">
                  <p><strong>Account Name:</strong> Association for Social Justice and Research</p>
                  <p><strong>Bank:</strong> [Bank Name]</p>
                  <p><strong>Account Number:</strong> [Account Number]</p>
                  <p><strong>IFSC Code:</strong> [IFSC Code]</p>
                  <p><strong>Account Type:</strong> Savings/Current</p>
                </div>
                <div className="mt-6 pt-6 border-t">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">For Cheque/DD</h3>
                  <p className="text-gray-600">Please make cheque/DD in favor of:</p>
                  <p className="font-semibold text-gray-800 mt-1">"Association for Social Justice and Research"</p>
                  <p className="text-gray-600 mt-2">and mail to:</p>
                  <p className="text-gray-600">62 B Law Apartment Karkarduma Delhi 110092</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DonateNow