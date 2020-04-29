// Sample card from Airbnb

import { Box, Image, Badge, Icon } from '@chakra-ui/core';
import Link from 'next/link';
export default function () {
  const property = {
    imageUrl: 'https://img-a.udemycdn.com/course/240x135/2056209_90a3_2.jpg',
    imageAlt: 'Rear view of modern home with pool',
    videos: 20,
    hours: 20,
    title: 'Nombre del Curso',
    formattedPrice: '$900.00',
    reviewCount: 34,
    rating: 4,
  };

  return (
    <Link href='/course/[id]' as='/course/1'>
      <Box
        cursor='pointer'
        className='grow'
        maxW='sm'
        borderWidth='1px'
        rounded='lg'
        overflow='hidden'
      >
        <Image w='100%' src={property.imageUrl} alt={property.imageAlt} />

        <Box p='6'>
          <Box d='flex' alignItems='baseline'>
            <Badge rounded='full' px='2' variantColor='teal'>
              New
            </Badge>
            <Box
              color='gray.500'
              fontWeight='semibold'
              letterSpacing='wide'
              fontSize='xs'
              textTransform='uppercase'
              ml='2'
            >
              {property.videos} videos &bull; {property.hours} horas
            </Box>
          </Box>

          <Box
            mt='1'
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            isTruncated
          >
            {property.title}
          </Box>

          <Box>
            {property.formattedPrice}
            <Box as='span' color='gray.600' fontSize='sm'>
              / wk
            </Box>
          </Box>

          <Box d='flex' mt='2' alignItems='center'>
            {Array(5)
              .fill('')
              .map((_, i) => (
                <Icon
                  name='star'
                  key={i}
                  color={i < property.rating ? 'teal.500' : 'gray.300'}
                />
              ))}
            <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {property.reviewCount} Inscritos
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}
