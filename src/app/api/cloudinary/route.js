import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const result = await cloudinary.search
      .expression('folder:athena/*')
      .sort_by('public_id', 'asc')
      .max_results(50)  // Adjust this number based on your needs
      .with_field('context')
      .execute();

    console.log(result.resources);  
    return NextResponse.json(result.resources);
  } catch (error) {
    console.error('Error fetching Cloudinary images:', error);
    return NextResponse.json({ error: 'Error fetching images' }, { status: 500 });
  }
}