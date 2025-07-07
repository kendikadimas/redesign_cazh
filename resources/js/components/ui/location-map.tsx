import React from 'react';

export function LocationMap() {
    return (
        <section className="w-full h-[400px] md:h-[500px]">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.375823954689!2d109.25562347476207!3d-7.423594392586945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e655f63e94f62b5%3A0xf911bc8997b8952a!2sCAZH!5e0!3m2!1sen!2sid!4v1751705563359!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
}