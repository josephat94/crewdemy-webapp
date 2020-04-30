import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Layout from '../components/layout/Layout';
import { useRouter } from 'next/router';
import DrawerCalendar from '../components/drawerCalendar/DrawerCalendar';
import { useDisclosure } from '@chakra-ui/core';
const myEventsList = [
  {
    start: moment().toDate(),
    end: moment().add(1, 'days').toDate(),
    title: 'Curso de React',
  },

  {
    start: moment().subtract(10, 'days').toDate(),
    end: moment().subtract(9, 'days').toDate(),
    title: 'Curso de Angular',
  },

  {
    start: moment().subtract(6, 'days').toDate(),
    end: moment().subtract(5, 'days').toDate(),
    title: 'Curso de Scrum',
  },
];

const localizer = momentLocalizer(moment);
export default (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const selectEvent = (e) => {
    onOpen();
  };

  return (
    <Layout>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor='start'
        endAccessor='end'
        messages={{
          next: 'Siguiente',
          previous: 'Atrás',
          today: 'Ahora',
          month: 'Mes',
          week: 'Semana',
          day: 'Día',
        }}
        onSelectEvent={selectEvent}
        style={{ height: 450 }}
      />
      <DrawerCalendar isOpen={isOpen} onClose={onClose} />
    </Layout>
  );
};
