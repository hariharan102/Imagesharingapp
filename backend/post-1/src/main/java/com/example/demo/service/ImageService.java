package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entity.Image;
import com.example.demo.repository.ImageRepository;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class ImageService {

    @Autowired
    private ImageRepository imageRepository;

    public void saveImage(MultipartFile file, String caption, String location) throws IOException {
        Image image = new Image();
        image.setData(file.getBytes());
        image.setCaption(caption);
        image.setLocation(location);
        imageRepository.save(image);
    }

    public Optional<byte[]> getImageData(Long id) {
        return imageRepository.findById(id)
                .map(Image::getData);
    }

    public List<Image> getAllImages() {
        return imageRepository.findAll();
    }

    public Optional<Image> getImageDetails(Long id) {
        return imageRepository.findById(id);
    }
}
