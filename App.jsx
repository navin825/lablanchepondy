import React from 'react'

export default function App(){
  return (
    <div>
      <header className="header">
        <div className="logo">
          <div className="mark">LB</div>
          <div>
            <div style={{fontWeight:700}}>La Blanche Salon</div>
            <div style={{fontSize:12,color:'#6b7280'}}>Mission Street · New branch near Collector's Office (opening this month)</div>
          </div>
        </div>
        <a className="btn" href="https://wa.me/914134900666" target="_blank" rel="noreferrer">Call / WhatsApp</a>
      </header>

      <main className="container">
        <section style={{display:'grid',gap:20,marginTop:20}} className="two-col">
          <div>
            <h1 style={{fontSize:34,margin:0}}>Luxury hair & beauty in Pondicherry</h1>
            <p style={{color:'#374151',marginTop:12,lineHeight:1.5}}>Now welcoming guests at our Mission Street salon — and opening a new branch next to the Collector's Office this month. Appointments recommended.</p>

            <div style={{marginTop:18,display:'flex',gap:10}}>
              <a href="#locations" className="card" style={{textDecoration:'none'}}>View locations</a>
              <a href="#services" className="btn" style={{textDecoration:'none'}}>See services & pricing</a>
              <a href="https://wa.me/914134900666" className="card" style={{textDecoration:'none'}}>Book on WhatsApp</a>
            </div>

            <div style={{marginTop:22}}>
              <h3 style={{margin:0}}>Popular services</h3>
              <div className="service-grid" style={{marginTop:12}}>
                <Service title="Women's Haircut" price="INR 800+" desc="Precision cuts, styling and consultation." />
                <Service title="Colour & Highlights" price="INR 2000+" desc="Balayage, ombré and full-colour services." />
                <Service title="Keratin / Smoothening" price="INR 2500+" desc="Long-lasting smooth finish and treatment." />
                <Service title="Bridal Package" price="Custom" desc="Full bridal hair, makeup and trial sessions." />
                <Service title="Facials & Skin" price="INR 1000+" desc="Hydrating, brightening and acne-care treatments." />
                <Service title="Gents Grooming" price="INR 400+" desc="Haircut, beard trim and styling." />
              </div>
            </div>
          </div>

          <aside>
            <div className="card">
              <div style={{height:220,background:'#fde68a',borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{textAlign:'center'}}>
                  <div style={{fontSize:18,fontWeight:700}}>La Blanche — Mission Street</div>
                  <div style={{fontSize:12,color:'#6b7280',marginTop:8}}>Salon • Hair • Beauty • Bridal • Spa</div>
                </div>
              </div>

              <div style={{marginTop:12}}>
                <div style={{fontSize:13}}>Phone</div>
                <a href="tel:04134900666" style={{color:'#b45309',fontWeight:700}}>0413 490 0666</a>

                <div style={{marginTop:10,fontSize:13}}>Email</div>
                <a href="mailto:hello@lablanchesalon.com" style={{color:'#b45309'}}>hello@lablanchesalon.com</a>

                <div style={{marginTop:10,fontSize:13}}>Walk-ins</div>
                <div style={{color:'#4b5563'}}>Accepted subject to availability — appointments recommended.</div>
              </div>
            </div>
          </aside>
        </section>

        <section id="gallery" style={{marginTop:28}}>
          <h3>Gallery</h3>
          <div className="gallery" style={{marginTop:12}}>
            {Array.from({length:8}).map((_,i)=>(
              <div key={i} style={{background:'#e6e6e6',height:80,borderRadius:8,display:'flex',alignItems:'center',justifyContent:'center',color:'#6b7280'}}>Image {i+1}</div>
            ))}
          </div>
        </section>

        <section id="locations" style={{marginTop:28}}>
          <h3>Our locations</h3>
          <div style={{display:'grid',gap:12,marginTop:12}}>
            <div className="card">
              <strong>La Blanche — Mission Street</strong>
              <div style={{color:'#6b7280',marginTop:6}}>Bayshore Plaza, 2nd floor, Mission St, Heritage Town, Puducherry, 605001</div>
              <div style={{marginTop:8}}>Phone: <a href="tel:04134900666" style={{color:'#b45309'}}>0413 490 0666</a></div>
              <div style={{marginTop:6,color:'#6b7280'}}>Hours: Open — Closes 9pm</div>
            </div>

            <div className="card">
              <strong>La Blanche — Collector's Office (Opening soon)</strong>
              <div style={{color:'#6b7280',marginTop:6}}>Near Collector Office, Mission St area, Puducherry</div>
              <div style={{marginTop:8}}>Phone: <a href="tel:04134900666" style={{color:'#b45309'}}>0413 490 0666</a></div>
              <div style={{marginTop:6,color:'#6b7280'}}>Opening this month — timings to be confirmed</div>
            </div>
          </div>
        </section>

        <section id="contact" style={{marginTop:28}}>
          <h3>Contact & Bookings</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr',gap:12,marginTop:12}}>
            <div className="card">
              <form onSubmit={(e)=>{e.preventDefault(); alert('Thanks — we will get back to you!')}}>
                <div style={{display:'grid',gap:8}}>
                  <label style={{fontSize:13}}>Your name</label>
                  <input required style={{padding:8,borderRadius:6,border:'1px solid #e6e6e6'}} />
                  <label style={{fontSize:13}}>Phone / WhatsApp</label>
                  <input required style={{padding:8,borderRadius:6,border:'1px solid #e6e6e6'}} />
                  <label style={{fontSize:13}}>Message / Service requested</label>
                  <textarea style={{padding:8,borderRadius:6,border:'1px solid #e6e6e6'}} rows={3}></textarea>
                  <div style={{marginTop:10,display:'flex',gap:8}}>
                    <button className="btn" type="submit">Send message</button>
                    <a className="card" href="https://wa.me/914134900666" target="_blank" rel="noreferrer" style={{textDecoration:'none',display:'inline-flex',alignItems:'center',padding:'10px 12px',borderRadius:8}}>Message on WhatsApp</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} La Blanche Salon — Mission Street & Collector's Office branch coming soon.</footer>
      </main>
    </div>
  )
}

function Service({title,price,desc}){
  return (
    <div style={{padding:12,background:'#fff',borderRadius:8,border:'1px solid #eee'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline'}}>
        <strong>{title}</strong>
        <div style={{color:'#6b7280'}}>{price}</div>
      </div>
      <div style={{marginTop:8,color:'#6b7280'}}>{desc}</div>
      <div style={{marginTop:10}}><a href="https://wa.me/914134900666" style={{color:'#b45309'}}>Book on WhatsApp</a></div>
    </div>
  )
}