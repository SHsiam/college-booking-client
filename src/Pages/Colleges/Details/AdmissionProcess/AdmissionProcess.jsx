

const AdmissionProcess = () => {
    return (
        <div className="text-orange-950 min-h-screen bg-orange-50 py-8 px-8">
            <h1 className='text-center  font-bold text-5xl'>International Applicants</h1>
            <h2 className="text-3xl my-4">In our admission process, we consider any student who is neither a U.S. citizen nor U.S. permanent resident to be an international student.</h2>
            <p>International students have been an integral part of the university from its inception. Stanford is committed to enrolling a student body that includes students from around the world. The interactions among students with different backgrounds and experiences create a dynamic environment in which to learn and live.</p>
            <p>
                Members of our admission staff specialize in evaluating educational systems from countries around the world and will consider your application within the context of the resources available to you. We recognize the educational procedures within your school and country as well as cultural and regional differences. Regardless of citizenship, applicants are reviewed in the context and country where they attend high school.
            </p>
            <p>International students are an integral part of our student body and contribute to a dynamic environment in which to learn and live. Please find frequently asked questions about applying as an international student below.</p>

            <div className="collapse collapse-plus bg-orange-100 my-4">
                <input type="radio" name="my-accordion-3" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                What is the application process for international applicants?
                </div>
                <div className="collapse-content">
                    <p>U.S. citizens, U.S. permanent residents, and undocumented/DACA students are considered domestic applicants in our application process. If you are a U.S. citizen or a U.S. permanent resident living and attending school abroad, you are considered a domestic applicant for financial aid purposes, while your application will be read in the context of your secondary school.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-orange-100 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Am I eligible for financial aid?
                </div>
                <div className="collapse-content">
                    <p>If you are not a U.S. citizen, legal permanent resident or an undocumented student, your request for financial aid will be a factor in our admission evaluation. While financial aid resources are limited for international citizens, Stanford does offer admission to a number of these applicants each year. International citizens who indicate on their applications that they will not be applying for financial aid and subsequently are admitted are not eligible to apply for financial aid at any time during their four years at Stanford. However, if your citizenship status changes during the time you are enrolled as an undergraduate, and you become eligible for federal student aid, you may also be considered for need-based financial aid starting in the quarter during which your citizenship status changes.</p>
                </div>
            </div>
            <div className="collapse collapse-plus bg-orange-100 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                How do I apply from a school with an international curriculum?
                </div>
                <div className="collapse-content">
                    <p>Members of our admission staff specialize in reading applications from countries around the world. We are familiar with the nuances of different education systems and consider your application within the context of the resources available to you. We will consider the educational procedures within your school and country, as well as cultural and regional differences.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-orange-100 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What should I do if my school operates on a different academic calendar?
                </div>
                <div className="collapse-content">
                    <p> All of our admitted students enroll in the fall quarter. You must be in possession of a secondary school diploma or your country’s equivalent by the time you enroll.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-orange-100 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                Do I need to translate my school documents into English?
                </div>
                <div className="collapse-content">
                    <p>Official copies of your original transcripts and teacher evaluations are required. These must also be translated into English and copies of the translated documents must be provided with your application. Translations may not be completed by the applicant. However, we encourage applicants to utilize other resources available to them—such as English teachers or school administrators—to provide such translations.</p>
                </div>
            </div>

            <div className="collapse collapse-plus bg-orange-100 my-4">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-xl font-medium">
                What should I do if my school does not have a guidance counselor?
                </div>
                <div className="collapse-content">
                    <p>If you do not have a guidance counselor, you may have another school official (i.e. principal, homeroom teacher, etc.) submit the counselor letter of recommendation for you.</p>
                </div>
            </div>
        </div>
    );
};

export default AdmissionProcess;