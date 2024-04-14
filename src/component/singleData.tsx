import { useParams } from 'react-router-dom';

interface WeatherRecord {
    datasetid: string;
    recordid: string;
    fields: {
        coordinates: [number, number];
        cou_name_en: string;
        label_en: string;
        feature_code: string;
        population: number;
        dem: number;
        geoname_id: string;
        name: string;
        ascii_name: string;
        alternate_names: string;
        admin1_code: string;
        feature_class: string;
        country_code: string;
        timezone: string;
        modification_date: string;
    };
    record_timestamp: string;
}

interface Props {
    weatherData: {
        records: WeatherRecord[];
    };
}

function SingleData({ weatherData }: Props) {
    const { cityName } = useParams();

    const cityRecord = weatherData?.records.find(record => record.fields.name === cityName);

    if (!cityRecord) {
        return <div>City not found</div>;
    }

    const { fields } = cityRecord;

    return (
        <div className='bg-sky-300 pb-16'>
            <div className='px-5 md:px-0 lg:mx-24 md:mx-14 mx-6'>
                <div className='flex justify-center md:mt-20 mt-10 md:text-4xl text-2xl font-semibold hover:text-sky-900 cursor-pointer'>
                    <h1>City Name :- {fields.name}</h1>
                </div>

                <div className='md:flex md:justify-between md:mt-16 mt-8 md:mx-56 text-2xl'>
                    <p className='bg-[#62c9ee] border border-gray px-6 py-4 text-xl rounded-lg backdrop-brightness-105 shadow-md shadow-gray hover:scale-110 duration-300'>modification_date :- {fields.modification_date}</p>
                    <p className='bg-[#62c9ee] border border-gray px-8 py-5 mt-8 md:mt-0 rounded-lg backdrop-brightness-105 shadow-md shadow-gray hover:scale-110 duration-300'>Country :- {fields.cou_name_en}</p>
                </div>

                <div className='md:flex md:justify-between md:mx-64 text-2xl mt-8 md:mt-16'>
                    <p className='bg-[#62c9ee] border border-gray px-8 py-5  mt-8 md:mt-0 rounded-lg backdrop-brightness-105 shadow-md shadow-gray hover:scale-110 duration-300'>population :- {fields.population}</p>
                    <p className='bg-[#62c9ee] border border-gray px-8 py-5 mt-8 md:mt-0 rounded-lg backdrop-brightness-105 shadow-md shadow-gray hover:scale-110 duration-300 '>Timezone :- {fields.timezone}</p>
                </div>

                <div className='md:flex md:justify-between md:mt-16 mt-8 md:mx-64 text-2xl'>
                    <p className='bg-[#62c9ee] border border-gray px-8 py-5 rounded-lg backdrop-brightness-105 shadow-md shadow-gray hover:scale-110 duration-300 '>country_code :- {fields.country_code}</p>
                    <p className='bg-[#62c9ee] border border-gray px-8 py-5 mt-8 md:mt-0 rounded-lg backdrop-brightness-105 shadow-md shadow-gray hover:scale-110 duration-300'>geoname_id :- {fields.geoname_id}</p>
                </div>

            </div>

        </div>
    );
}

export default SingleData;


