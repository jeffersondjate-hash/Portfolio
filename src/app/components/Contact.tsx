import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"
import { motion } from "motion/react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Message de ${formData.name}`)
    const body = encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\n${formData.message}`,
    )
    window.location.href = `mailto:jeffersondjate@gmail.com?subject=${subject}&body=${body}`
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gray-900 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <img
          src="https://images.unsplash.com/photo-1733412505442-36cfa59a4240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwcHJvZ3JhbW1pbmclMjBzY3JlZW4lMjBkYXJrfGVufDF8fHx8MTc2OTk1MDIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-white">
            <span className="text-green-400 glow-text">Contactez-moi</span>
          </h2>
          <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez simplement discuter ?
            N'hésitez pas à me contacter !
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-green-400">
                Restons en contact
              </h3>
              <p className="text-gray-300 mb-8">
                Je suis toujours ouvert à de nouvelles opportunités et
                collaborations. N'hésitez pas à me contacter pour discuter de
                vos projets.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-gray-800 rounded-lg border-2 border-green-400/30">
                  <Mail className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:jeffersondjate@gmail.com"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    jeffersondjate@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-gray-800 rounded-lg border-2 border-green-400/30">
                  <Phone className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Téléphone</p>
                  <a
                    href="tel:+33123456789"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                  >
                    +225 01 42 87 01 44
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ x: 10 }}
              >
                <div className="p-3 bg-gray-800 rounded-lg border-2 border-green-400/30">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="font-semibold text-white">Localisation</p>
                  <p className="text-gray-400">Abidjan, Côte d'ivoire</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulaire de contact */}
          <motion.div
            className="bg-gray-800 p-8 rounded-lg border-2 border-green-400/30"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-green-400/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-gray-900 border border-green-400/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none text-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-900 border border-green-400/30 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none resize-none text-white"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(74, 222, 128, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-green-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-green-300 transition-colors flex items-center justify-center gap-2 font-bold"
              >
                Envoyer le message
                <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .glow-text {
          text-shadow: 0 0 10px rgba(74, 222, 128, 0.8),
                       0 0 20px rgba(74, 222, 128, 0.6);
        }
      `}</style>
    </section>
  )
}
